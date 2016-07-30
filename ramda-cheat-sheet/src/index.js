import {
  tap, invoker, __ as _, compose, F, curry,
  reject, isEmpty, split, lift, of,  
  toLower,
} from 'ramda';

const querySelectAll = curry(
  (query, ctx) => [...ctx.querySelectorAll(query)]
);

const querySelect = curry(
  (query, ctx) => ctx.querySelector(query)
);

const freeze = o => Object.freeze(o);

const events = (function(){
  const splitNames = compose(reject(isEmpty), split(" "));
  const addListener = invoker(3, 'addEventListener')(_, _, false);
  
  const o = {
    noDefault: tap(invoker(0, 'preventDefault')),
    noBubbling: tap(invoker(0, 'stopPropagation')),
  };

  o.addListener = curry((names, handler, ctx) =>
    lift(addListener)(splitNames(names), of(handler), of(ctx))
  );

  return freeze(o);
}());

events.addListener(
  'submit',
  compose(F, events.noDefault, events.noBubbling),
  querySelect('#search', document)
);

const ifValueChanged = function(fn) {
  let last = undefined;
  return function(evt) {
    let current = evt.target.value;
    if (current === last) {
      return evt;
    } else {
      last = current;
      return fn(evt);
    }
  };
};

const highLight = curry(function(match, links, evt) {
  for (let elem of links) {
    let score = match(elem.innerHTML, evt.target.value);
    elem.classList.remove('match');
    elem.classList.remove('kinda');
    
    if (score >= 0) elem.classList.add('match');
    if (score >= 1) elem.classList.add('kinda');
  }
});

const isMatching = function(a, b) {
  a = toLower(a);
  b = toLower(b);
  if (a === '' || b == '') return -1;
  if (a === b) return 0;
  if (a.indexOf(b) !== -1 || b.indexOf(a) !== -1) return 1;
  return -1;
};

const allLinks = querySelectAll("main li a", document);

events.addListener(
  'change keyup paste',
  ifValueChanged(highLight(isMatching, allLinks)),
  querySelect('#query', document)
);
