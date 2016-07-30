[
  {
    "id": "R.__",
    "longname": "R.__",
    "name": "__",
    "scope": "static",
    "kind": "constant",
    "description": "A special placeholder value used to specify \"gaps\" within curried functions,\nallowing partial application of any combination of arguments, regardless of\ntheir positions.\n\nIf `g` is a curried ternary function and `_` is `R.__`, the following are\nequivalent:\n\n  - `g(1, 2, 3)`\n  - `g(_, 2, 3)(1)`\n  - `g(_, _, 3)(1)(2)`\n  - `g(_, _, 3)(1, 2)`\n  - `g(_, 2, _)(1, 3)`\n  - `g(_, 2)(1)(3)`\n  - `g(_, 2)(1, 3)`\n  - `g(_, 2)(_, 3)(1)`",
    "memberof": "R",
    "examples": [
      "var greet = R.replace('{name}', R.__, 'Hello, {name}!');\n     greet('Alice'); //=> 'Hello, Alice!'"
    ],
    "since": "v0.6.0",
    "category": "Function",
    "meta": {
      "lineno": 36,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 0
  },
  {
    "id": "R.always",
    "longname": "R.always",
    "name": "always",
    "scope": "static",
    "kind": "function",
    "description": "Returns a function that always returns the given value. Note that for\nnon-primitives the value returned is a reference to the original value.\n\nThis function is known as `const`, `constant`, or `K` (for K combinator) in\nother languages and libraries.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value to wrap in a function",
        "name": "val"
      }
    ],
    "examples": [
      "var t = R.always('Tee');\n     t(); //=> 'Tee'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A Function :: * -> val."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> (* -> a)"
      }
    ],
    "meta": {
      "lineno": 1050,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 15
  },
  {
    "id": "R.apply",
    "longname": "R.apply",
    "name": "apply",
    "scope": "static",
    "kind": "function",
    "description": "Applies function `fn` to the argument list `args`. This is useful for\ncreating a fixed-arity function from a variadic function. `fn` should be a\nbound function if context is significant.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "args"
      }
    ],
    "examples": [
      "var nums = [1, 2, 3, -99, 42, 6, 7];\n     R.apply(Math.max, nums); //=> 42"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.7.0",
    "category": "Function",
    "see": [
      "R.call, R.unapply"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(*... -> a) -> [*] -> a"
      }
    ],
    "meta": {
      "lineno": 1183,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 20
  },
  {
    "id": "R.bind",
    "longname": "R.bind",
    "name": "bind",
    "scope": "static",
    "kind": "function",
    "description": "Creates a function that is bound to a context.\nNote: `R.bind` does not provide the additional argument-binding capabilities of\n[Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to bind to context",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The context to bind `fn` to",
        "name": "thisObj"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function that will execute in the context of `thisObj`."
      }
    ],
    "since": "v0.6.0",
    "category": "Function",
    "see": [
      "R.partial"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(* -> *) -> {*} -> (* -> *)"
      }
    ],
    "meta": {
      "lineno": 1263,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 23
  },
  {
    "id": "R.comparator",
    "longname": "R.comparator",
    "name": "comparator",
    "scope": "static",
    "kind": "function",
    "description": "Makes a comparator function out of a function that reports whether the first\nelement is less than the second.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate function of arity two.",
        "name": "pred"
      }
    ],
    "examples": [
      "var cmp = R.comparator((a, b) => a.age < b.age);\n     var people = [\n       // ...\n     ];\n     R.sort(cmp, people);"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a, b -> Boolean) -> (a, b -> Number)"
      }
    ],
    "meta": {
      "lineno": 1315,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 25
  },
  {
    "id": "R.curryN",
    "longname": "R.curryN",
    "name": "curryN",
    "scope": "static",
    "kind": "function",
    "description": "Returns a curried equivalent of the provided function, with the specified\narity. The curried function has two unusual capabilities. First, its\narguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the\nfollowing are equivalent:\n\n  - `g(1)(2)(3)`\n  - `g(1)(2, 3)`\n  - `g(1, 2)(3)`\n  - `g(1, 2, 3)`\n\nSecondly, the special placeholder value `R.__` may be used to specify\n\"gaps\", allowing partial application of any combination of arguments,\nregardless of their positions. If `g` is as above and `_` is `R.__`, the\nfollowing are equivalent:\n\n  - `g(1, 2, 3)`\n  - `g(_, 2, 3)(1)`\n  - `g(_, _, 3)(1)(2)`\n  - `g(_, _, 3)(1, 2)`\n  - `g(_, 2)(1)(3)`\n  - `g(_, 2)(1, 3)`\n  - `g(_, 2)(_, 3)(1)`",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The arity for the returned function.",
        "name": "length"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to curry.",
        "name": "fn"
      }
    ],
    "examples": [
      "var sumArgs = (...args) => R.sum(args);\n\n     var curriedAddFourNumbers = R.curryN(4, sumArgs);\n     var f = curriedAddFourNumbers(1, 2);\n     var g = f(3);\n     g(4); //=> 10"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new, curried function."
      }
    ],
    "since": "v0.5.0",
    "category": "Function",
    "see": [
      "R.curry"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> (* -> a) -> (* -> a)"
      }
    ],
    "meta": {
      "lineno": 1363,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 26
  },
  {
    "id": "R.empty",
    "longname": "R.empty",
    "name": "empty",
    "scope": "static",
    "kind": "function",
    "description": "Returns the empty value of its argument's type. Ramda defines the empty\nvalue of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other\ntypes are supported if they define `<Type>.empty` and/or\n`<Type>.prototype.empty`.\n\nDispatches to the `empty` method of the first argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "x"
      }
    ],
    "examples": [
      "R.empty(Just(42));      //=> Nothing()\n     R.empty([1, 2, 3]);     //=> []\n     R.empty('unicorns');    //=> ''\n     R.empty({x: 1, y: 2});  //=> {}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.3.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> a"
      }
    ],
    "meta": {
      "lineno": 1587,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 34
  },
  {
    "id": "R.identity",
    "longname": "R.identity",
    "name": "identity",
    "scope": "static",
    "kind": "function",
    "description": "A function that does nothing but return the parameter supplied to it. Good\nas a default or placeholder function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value to return.",
        "name": "x"
      }
    ],
    "examples": [
      "R.identity(1); //=> 1\n\n     var obj = {};\n     R.identity(obj) === obj; //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The input value, `x`."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> a"
      }
    ],
    "meta": {
      "lineno": 2047,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 48
  },
  {
    "id": "R.nAry",
    "longname": "R.nAry",
    "name": "nAry",
    "scope": "static",
    "kind": "function",
    "description": "Wraps a function of any arity (including nullary) in a function that accepts\nexactly `n` parameters. Any extraneous parameters will not be passed to the\nsupplied function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The desired arity of the new function.",
        "name": "n"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to wrap.",
        "name": "fn"
      }
    ],
    "examples": [
      "var takesTwoArgs = (a, b) => [a, b];\n\n     takesTwoArgs.length; //=> 2\n     takesTwoArgs(1, 2); //=> [1, 2]\n\n     var takesOneArg = R.nAry(1, takesTwoArgs);\n     takesOneArg.length; //=> 1\n     // Only `n` arguments are passed to the wrapped function\n     takesOneArg(1, 2); //=> [1, undefined]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new function wrapping `fn`. The new function is guaranteed to be of\n        arity `n`."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> (* -> a) -> (* -> a)"
      }
    ],
    "meta": {
      "lineno": 2859,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 75
  },
  {
    "id": "R.nthArg",
    "longname": "R.nthArg",
    "name": "nthArg",
    "scope": "static",
    "kind": "function",
    "description": "Returns a function which returns its nth argument.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "n"
      }
    ],
    "examples": [
      "R.nthArg(1)('a', 'b', 'c'); //=> 'b'\n     R.nthArg(-1)('a', 'b', 'c'); //=> 'c'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> *... -> *"
      }
    ],
    "meta": {
      "lineno": 3018,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 80
  },
  {
    "id": "R.of",
    "longname": "R.of",
    "name": "of",
    "scope": "static",
    "kind": "function",
    "description": "Returns a singleton array containing the value provided.\n\nNote this `of` is different from the ES6 `of`; See\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "any value",
        "name": "x"
      }
    ],
    "examples": [
      "R.of(null); //=> [null]\n     R.of([42]); //=> [[42]]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array wrapping `x`."
      }
    ],
    "since": "v0.3.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> [a]"
      }
    ],
    "meta": {
      "lineno": 3068,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 82
  },
  {
    "id": "R.once",
    "longname": "R.once",
    "name": "once",
    "scope": "static",
    "kind": "function",
    "description": "Accepts a function `fn` and returns a function that guards invocation of\n`fn` such that `fn` can only ever be called once, no matter how many times\nthe returned function is invoked. The first value calculated is returned in\nsubsequent invocations.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to wrap in a call-only-once wrapper.",
        "name": "fn"
      }
    ],
    "examples": [
      "var addOneOnce = R.once(x => x + 1);\n     addOneOnce(10); //=> 11\n     addOneOnce(addOneOnce(50)); //=> 11"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The wrapped function."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a... -> b) -> (a... -> b)"
      }
    ],
    "meta": {
      "lineno": 3089,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 83
  },
  {
    "id": "R.tap",
    "longname": "R.tap",
    "name": "tap",
    "scope": "static",
    "kind": "function",
    "description": "Runs the given function with the supplied object, then returns the object.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to call with `x`. The return value of `fn` will be thrown away.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "x"
      }
    ],
    "examples": [
      "var sayX = x => console.log('x is ' + x);\n     R.tap(sayX, 100); //=> 100\n     //-> 'x is 100'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "`x`."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> *) -> a -> a"
      }
    ],
    "meta": {
      "lineno": 4073,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 117
  },
  {
    "id": "R.tryCatch",
    "longname": "R.tryCatch",
    "name": "tryCatch",
    "scope": "static",
    "kind": "function",
    "description": "`tryCatch` takes two functions, a `tryer` and a `catcher`. The returned\nfunction evaluates the `tryer`; if it does not throw, it simply returns the\nresult. If the `tryer` *does* throw, the returned function evaluates the\n`catcher` function and returns its result. Note that for effective\ncomposition with this function, both the `tryer` and `catcher` functions\nmust return the same type of results.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function that may throw.",
        "name": "tryer"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function that will be evaluated if `tryer` throws.",
        "name": "catcher"
      }
    ],
    "examples": [
      "R.tryCatch(R.prop('x'), R.F, {x: true}); //=> true\n     R.tryCatch(R.prop('x'), R.F, null);      //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new function that will catch exceptions and send then to the catcher."
      }
    ],
    "since": "v0.20.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(...x -> a) -> ((e, ...x) -> a) -> (...x -> a)"
      }
    ],
    "meta": {
      "lineno": 4268,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 123
  },
  {
    "id": "R.unapply",
    "longname": "R.unapply",
    "name": "unapply",
    "scope": "static",
    "kind": "function",
    "description": "Takes a function `fn`, which takes a single array argument, and returns a\nfunction which:\n\n  - takes any number of positional arguments;\n  - passes these arguments to `fn` as an array; and\n  - returns the result.\n\nIn other words, R.unapply derives a variadic function from a function which\ntakes an array. R.unapply is the inverse of R.apply.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "fn"
      }
    ],
    "examples": [
      "R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.8.0",
    "category": "Function",
    "see": [
      "R.apply"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "([*...] -> a) -> (*... -> a)"
      }
    ],
    "meta": {
      "lineno": 4328,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 125
  },
  {
    "id": "R.unary",
    "longname": "R.unary",
    "name": "unary",
    "scope": "static",
    "kind": "function",
    "description": "Wraps a function of any arity (including nullary) in a function that accepts\nexactly 1 parameter. Any extraneous parameters will not be passed to the\nsupplied function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to wrap.",
        "name": "fn"
      }
    ],
    "examples": [
      "var takesTwoArgs = function(a, b) {\n       return [a, b];\n     };\n     takesTwoArgs.length; //=> 2\n     takesTwoArgs(1, 2); //=> [1, 2]\n\n     var takesOneArg = R.unary(takesTwoArgs);\n     takesOneArg.length; //=> 1\n     // Only 1 argument is passed to the wrapped function\n     takesOneArg(1, 2); //=> [1, undefined]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new function wrapping `fn`. The new function is guaranteed to be of\n        arity 1."
      }
    ],
    "since": "v0.2.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(* -> b) -> (a -> b)"
      }
    ],
    "meta": {
      "lineno": 4360,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 126
  },
  {
    "id": "R.uncurryN",
    "longname": "R.uncurryN",
    "name": "uncurryN",
    "scope": "static",
    "kind": "function",
    "description": "Returns a function of arity `n` from a (manually) curried function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The arity for the returned function.",
        "name": "length"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to uncurry.",
        "name": "fn"
      }
    ],
    "examples": [
      "var addFour = a => b => c => d => a + b + c + d;\n\n     var uncurriedAddFour = R.uncurryN(4, addFour);\n     uncurriedAddFour(1, 2, 3, 4); //=> 10"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new function."
      }
    ],
    "since": "v0.14.0",
    "category": "Function",
    "see": [
      "R.curry"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> (a -> b) -> (a -> c)"
      }
    ],
    "meta": {
      "lineno": 4383,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 127
  },
  {
    "id": "R.useWith",
    "longname": "R.useWith",
    "name": "useWith",
    "scope": "static",
    "kind": "function",
    "description": "Accepts a function `fn` and a list of transformer functions and returns a\nnew curried function. When the new function is invoked, it calls the\nfunction `fn` with parameters consisting of the result of calling each\nsupplied handler on successive arguments to the new function.\n\nIf more arguments are passed to the returned function than transformer\nfunctions, those arguments are passed directly to `fn` as additional\nparameters. If you expect additional arguments that don't need to be\ntransformed, although you can ignore them, it's best to pass an identity\nfunction so that the new function reports the correct arity.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to wrap.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A list of transformer functions",
        "name": "transformers"
      }
    ],
    "examples": [
      "R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81\n     R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81\n     R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32\n     R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The wrapped function."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)"
      }
    ],
    "meta": {
      "lineno": 4576,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 133
  },
  {
    "id": "R.wrap",
    "longname": "R.wrap",
    "name": "wrap",
    "scope": "static",
    "kind": "function",
    "description": "Wrap a function inside another to allow you to make adjustments to the\nparameters, or do other processing either before the internal function is\ncalled or with its results.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to wrap.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The wrapper function.",
        "name": "wrapper"
      }
    ],
    "examples": [
      "var greet = name => 'Hello ' + name;\n\n     var shoutedGreet = R.wrap(greet, (gr, name) => gr(name).toUpperCase());\n\n     shoutedGreet(\"Kathy\"); //=> \"HELLO KATHY\"\n\n     var shortenedGreet = R.wrap(greet, function(gr, name) {\n       return gr(name.substring(0, 3));\n     });\n     shortenedGreet(\"Robert\"); //=> \"Hello Rob\""
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The wrapped function."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a... -> b) -> ((a... -> b) -> a... -> c) -> (a... -> c)"
      }
    ],
    "meta": {
      "lineno": 4787,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 139
  },
  {
    "id": "R.F",
    "longname": "R.F",
    "name": "F",
    "scope": "static",
    "kind": "function",
    "description": "A function that always returns `false`. Any passed in parameters are ignored.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "examples": [
      "R.F(); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Function",
    "see": [
      "R.always, R.T"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "* -> Boolean"
      }
    ],
    "meta": {
      "lineno": 4941,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 144
  },
  {
    "id": "R.T",
    "longname": "R.T",
    "name": "T",
    "scope": "static",
    "kind": "function",
    "description": "A function that always returns `true`. Any passed in parameters are ignored.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "examples": [
      "R.T(); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Function",
    "see": [
      "R.always, R.F"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "* -> Boolean"
      }
    ],
    "meta": {
      "lineno": 4958,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 145
  },
  {
    "id": "R.addIndex",
    "longname": "R.addIndex",
    "name": "addIndex",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new list iteration function from an existing one by adding two new\nparameters to its callback function: the current index, and the entire list.\n\nThis would turn, for instance, Ramda's simple `map` function into one that\nmore closely resembles `Array.prototype.map`. Note that this will only work\nfor functions in which the iteration callback function is the first\nparameter, and where the list is the last parameter. (This latter might be\nunimportant if the list parameter is not used.)",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A list iteration function that does not pass index or list to its callback",
        "name": "fn"
      }
    ],
    "examples": [
      "var mapIndexed = R.addIndex(R.map);\n     mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);\n     //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "An altered list iteration function that passes (item, index, list) to its callback"
      }
    ],
    "since": "v0.15.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)"
      }
    ],
    "meta": {
      "lineno": 5309,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 148
  },
  {
    "id": "R.binary",
    "longname": "R.binary",
    "name": "binary",
    "scope": "static",
    "kind": "function",
    "description": "Wraps a function of any arity (including nullary) in a function that accepts\nexactly 2 parameters. Any extraneous parameters will not be passed to the\nsupplied function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to wrap.",
        "name": "fn"
      }
    ],
    "examples": [
      "var takesThreeArgs = function(a, b, c) {\n       return [a, b, c];\n     };\n     takesThreeArgs.length; //=> 3\n     takesThreeArgs(1, 2, 3); //=> [1, 2, 3]\n\n     var takesTwoArgs = R.binary(takesThreeArgs);\n     takesTwoArgs.length; //=> 2\n     // Only 2 arguments are passed to the wrapped function\n     takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new function wrapping `fn`. The new function is guaranteed to be of\n        arity 2."
      }
    ],
    "since": "v0.2.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(* -> c) -> (a, b -> c)"
      }
    ],
    "meta": {
      "lineno": 5353,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 149
  },
  {
    "id": "R.curry",
    "longname": "R.curry",
    "name": "curry",
    "scope": "static",
    "kind": "function",
    "description": "Returns a curried equivalent of the provided function. The curried function\nhas two unusual capabilities. First, its arguments needn't be provided one\nat a time. If `f` is a ternary function and `g` is `R.curry(f)`, the\nfollowing are equivalent:\n\n  - `g(1)(2)(3)`\n  - `g(1)(2, 3)`\n  - `g(1, 2)(3)`\n  - `g(1, 2, 3)`\n\nSecondly, the special placeholder value `R.__` may be used to specify\n\"gaps\", allowing partial application of any combination of arguments,\nregardless of their positions. If `g` is as above and `_` is `R.__`, the\nfollowing are equivalent:\n\n  - `g(1, 2, 3)`\n  - `g(_, 2, 3)(1)`\n  - `g(_, _, 3)(1)(2)`\n  - `g(_, _, 3)(1, 2)`\n  - `g(_, 2)(1)(3)`\n  - `g(_, 2)(1, 3)`\n  - `g(_, 2)(_, 3)(1)`",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to curry.",
        "name": "fn"
      }
    ],
    "examples": [
      "var addFourNumbers = (a, b, c, d) => a + b + c + d;\n\n     var curriedAddFourNumbers = R.curry(addFourNumbers);\n     var f = curriedAddFourNumbers(1, 2);\n     var g = f(3);\n     g(4); //=> 10"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new, curried function."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "see": [
      "R.curryN"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(* -> a) -> (* -> a)"
      }
    ],
    "meta": {
      "lineno": 5422,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 151
  },
  {
    "id": "R.flip",
    "longname": "R.flip",
    "name": "flip",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new function much like the supplied one, except that the first two\narguments' order is reversed.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to invoke with its first two parameters reversed.",
        "name": "fn"
      }
    ],
    "examples": [
      "var mergeThree = (a, b, c) => [].concat(a, b, c);\n\n     mergeThree(1, 2, 3); //=> [1, 2, 3]\n\n     R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The result of invoking `fn` with its first two parameters' order reversed."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)"
      }
    ],
    "meta": {
      "lineno": 5604,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 158
  },
  {
    "id": "R.partial",
    "longname": "R.partial",
    "name": "partial",
    "scope": "static",
    "kind": "function",
    "description": "Takes a function `f` and a list of arguments, and returns a function `g`.\nWhen applied, `g` returns the result of applying `f` to the arguments\nprovided initially followed by the arguments provided to `g`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "f"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "args"
      }
    ],
    "examples": [
      "var multiply = (a, b) => a * b;\n     var double = R.partial(multiply, [2]);\n     double(2); //=> 4\n\n     var greet = (salutation, title, firstName, lastName) =>\n       salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';\n\n     var sayHello = R.partial(greet, ['Hello']);\n     var sayHelloToMs = R.partial(sayHello, ['Ms.']);\n     sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.10.0",
    "category": "Function",
    "see": [
      "R.partialRight"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)"
      }
    ],
    "meta": {
      "lineno": 6048,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 171
  },
  {
    "id": "R.partialRight",
    "longname": "R.partialRight",
    "name": "partialRight",
    "scope": "static",
    "kind": "function",
    "description": "Takes a function `f` and a list of arguments, and returns a function `g`.\nWhen applied, `g` returns the result of applying `f` to the arguments\nprovided to `g` followed by the arguments provided initially.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "f"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "args"
      }
    ],
    "examples": [
      "var greet = (salutation, title, firstName, lastName) =>\n       salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';\n\n     var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);\n\n     greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.10.0",
    "category": "Function",
    "see": [
      "R.partial"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)"
      }
    ],
    "meta": {
      "lineno": 6073,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 172
  },
  {
    "id": "R.ap",
    "longname": "R.ap",
    "name": "ap",
    "scope": "static",
    "kind": "function",
    "description": "ap applies a list of functions to a list of values.\n\nDispatches to the `ap` method of the second argument, if present. Also\ntreats functions as applicatives.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of functions",
        "name": "fns"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of values",
        "name": "vs"
      }
    ],
    "examples": [
      "R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of results of applying each of `fns` to all of `vs` in turn."
      }
    ],
    "since": "v0.3.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "[f] -> [a] -> [f a]"
      }
    ],
    "meta": {
      "lineno": 6700,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 190
  },
  {
    "id": "R.applySpec",
    "longname": "R.applySpec",
    "name": "applySpec",
    "scope": "static",
    "kind": "function",
    "description": "Given a spec object recursively mapping properties to functions, creates a\nfunction producing an object of the same structure, by mapping each property\nto the result of calling its associated function with the supplied arguments.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "an object recursively mapping properties to functions for\n       producing the values for these properties.",
        "name": "spec"
      }
    ],
    "examples": [
      "var getMetrics = R.applySpec({\n                                     sum: R.add,\n                                     nested: { mul: R.multiply }\n                                  });\n     getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function that returns an object of the same structure\nas `spec', with each property set to the value returned by calling its\nassociated function with the supplied arguments."
      }
    ],
    "since": "v0.20.0",
    "category": "Function",
    "see": [
      "R.juxt"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "{k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})"
      }
    ],
    "meta": {
      "lineno": 6733,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 191
  },
  {
    "id": "R.call",
    "longname": "R.call",
    "name": "call",
    "scope": "static",
    "kind": "function",
    "description": "Returns the result of calling its first argument with the remaining\narguments. This is occasionally useful as a converging function for\n`R.converge`: the left branch can produce a function while the right branch\nproduces a value to be passed to that function as an argument.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to apply to the remaining arguments.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "variable": true,
        "description": "Any number of positional arguments.",
        "name": "args"
      }
    ],
    "examples": [
      "var indentN = R.pipe(R.times(R.always(' ')),\n                          R.join(''),\n                          R.replace(/^(?!$)/gm));\n\n     var format = R.converge(R.call, [\n                                 R.pipe(R.prop('indent'), indentN),\n                                 R.prop('value')\n                             ]);\n\n     format({indent: 2, value: 'foo\\nbar\\nbaz\\n'}); //=> '  foo\\n  bar\\n  baz\\n'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Function",
    "see": [
      "R.apply"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(*... -> a),*... -> a"
      }
    ],
    "meta": {
      "lineno": 6773,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 192
  },
  {
    "id": "R.constructN",
    "longname": "R.constructN",
    "name": "constructN",
    "scope": "static",
    "kind": "function",
    "description": "Wraps a constructor function inside a curried function that can be called\nwith the same arguments and returns the same type. The arity of the function\nreturned is specified to allow using variadic constructor functions.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The arity of the constructor function.",
        "name": "n"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The constructor function to wrap.",
        "name": "Fn"
      }
    ],
    "examples": [
      "// Variadic constructor function\n     var Widget = () => {\n       this.children = Array.prototype.slice.call(arguments);\n       // ...\n     };\n     Widget.prototype = {\n       // ...\n     };\n     var allConfigs = [\n       // ...\n     ];\n     R.map(R.constructN(1, Widget), allConfigs); // a list of Widgets"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A wrapped, curried constructor function."
      }
    ],
    "since": "v0.4.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> (* -> {*}) -> (* -> {*})"
      }
    ],
    "meta": {
      "lineno": 6874,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 195
  },
  {
    "id": "R.converge",
    "longname": "R.converge",
    "name": "converge",
    "scope": "static",
    "kind": "function",
    "description": "Accepts a converging function and a list of branching functions and returns\na new function. When invoked, this new function is applied to some\narguments, each branching function is applied to those same arguments. The\nresults of each branching function are passed as arguments to the converging\nfunction to produce the return value.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function. `after` will be invoked with the return values of\n       `fn1` and `fn2` as its arguments.",
        "name": "after"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A list of functions.",
        "name": "functions"
      }
    ],
    "examples": [
      "var add = (a, b) => a + b;\n     var multiply = (a, b) => a * b;\n     var subtract = (a, b) => a - b;\n\n     //≅ multiply( add(1, 2), subtract(1, 2) );\n     R.converge(multiply, [add, subtract])(1, 2); //=> -3\n\n     var add3 = (a, b, c) => a + b + c;\n     R.converge(add3, [multiply, add, subtract])(1, 2); //=> 4"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new function."
      }
    ],
    "since": "v0.4.2",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)"
      }
    ],
    "meta": {
      "lineno": 6937,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 196
  },
  {
    "id": "R.juxt",
    "longname": "R.juxt",
    "name": "juxt",
    "scope": "static",
    "kind": "function",
    "description": "juxt applies a list of functions to a list of values.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of functions",
        "name": "fns"
      }
    ],
    "examples": [
      "var range = R.juxt([Math.min, Math.max]);\n     range(3, 4, 9, -3); //=> [-3, 9]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function that returns a list of values after applying each of the original `fns` to its parameters."
      }
    ],
    "since": "v0.19.0",
    "category": "Function",
    "see": [
      "R.applySpec"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])"
      }
    ],
    "meta": {
      "lineno": 7168,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 204
  },
  {
    "id": "R.liftN",
    "longname": "R.liftN",
    "name": "liftN",
    "scope": "static",
    "kind": "function",
    "description": "\"lifts\" a function to be the specified arity, so that it may \"map over\" that\nmany lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to lift into higher context",
        "name": "fn"
      }
    ],
    "examples": [
      "var madd3 = R.liftN(3, R.curryN(3, (...args) => R.sum(args)));\n     madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The lifted function."
      }
    ],
    "since": "v0.7.0",
    "category": "Function",
    "see": [
      "R.lift, R.ap"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> (*... -> *) -> ([*]... -> [*])"
      }
    ],
    "meta": {
      "lineno": 7294,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 209
  },
  {
    "id": "R.pipe",
    "longname": "R.pipe",
    "name": "pipe",
    "scope": "static",
    "kind": "function",
    "description": "Performs left-to-right function composition. The leftmost function may have\nany arity; the remaining functions must be unary.\n\nIn some libraries this function is named `sequence`.\n\n**Note:** The result of pipe is not automatically curried.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "variable": true,
        "name": "functions"
      }
    ],
    "examples": [
      "var f = R.pipe(Math.pow, R.negate, R.inc);\n\n     f(3, 4); // -(3^4) + 1"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "see": [
      "R.compose"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)"
      }
    ],
    "meta": {
      "lineno": 7398,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 213
  },
  {
    "id": "R.pipeP",
    "longname": "R.pipeP",
    "name": "pipeP",
    "scope": "static",
    "kind": "function",
    "description": "Performs left-to-right composition of one or more Promise-returning\nfunctions. The leftmost function may have any arity; the remaining functions\nmust be unary.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "variable": true,
        "name": "functions"
      }
    ],
    "examples": [
      "//  followersForUser :: String -> Promise [User]\n     var followersForUser = R.pipeP(db.getUserById, db.getFollowers);"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.10.0",
    "category": "Function",
    "see": [
      "R.composeP"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)"
      }
    ],
    "meta": {
      "lineno": 7423,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 214
  },
  {
    "id": "R.compose",
    "longname": "R.compose",
    "name": "compose",
    "scope": "static",
    "kind": "function",
    "description": "Performs right-to-left function composition. The rightmost function may have\nany arity; the remaining functions must be unary.\n\n**Note:** The result of compose is not automatically curried.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "variable": true,
        "name": "functions"
      }
    ],
    "examples": [
      "var f = R.compose(R.inc, R.negate, Math.pow);\n\n     f(3, 4); // -(3^4) + 1"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "see": [
      "R.pipe"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)"
      }
    ],
    "meta": {
      "lineno": 7592,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 219
  },
  {
    "id": "R.composeK",
    "longname": "R.composeK",
    "name": "composeK",
    "scope": "static",
    "kind": "function",
    "description": "Returns the right-to-left Kleisli composition of the provided functions,\neach of which must return a value of a type supported by [`chain`](#chain).\n\n`R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "variable": true
      }
    ],
    "examples": [
      "//  parseJson :: String -> Maybe *\n     //  get :: String -> Object -> Maybe *\n\n     //  getStateCode :: Maybe String -> Maybe String\n     var getStateCode = R.composeK(\n       R.compose(Maybe.of, R.toUpper),\n       get('state'),\n       get('address'),\n       get('user'),\n       parseJson\n     );\n\n     getStateCode(Maybe.of('{\"user\":{\"address\":{\"state\":\"ny\"}}}'));\n     //=> Just('NY')\n     getStateCode(Maybe.of('[Invalid JSON]'));\n     //=> Nothing()"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "Function",
    "see": [
      "R.pipeK"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (m a -> m z)"
      }
    ],
    "meta": {
      "lineno": 7632,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 220
  },
  {
    "id": "R.composeP",
    "longname": "R.composeP",
    "name": "composeP",
    "scope": "static",
    "kind": "function",
    "description": "Performs right-to-left composition of one or more Promise-returning\nfunctions. The rightmost function may have any arity; the remaining\nfunctions must be unary.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "variable": true,
        "name": "functions"
      }
    ],
    "examples": [
      "//  followersForUser :: String -> Promise [User]\n     var followersForUser = R.composeP(db.getFollowers, db.getUserById);"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.10.0",
    "category": "Function",
    "see": [
      "R.pipeP"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)"
      }
    ],
    "meta": {
      "lineno": 7654,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 221
  },
  {
    "id": "R.construct",
    "longname": "R.construct",
    "name": "construct",
    "scope": "static",
    "kind": "function",
    "description": "Wraps a constructor function inside a curried function that can be called\nwith the same arguments and returns the same type.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The constructor function to wrap.",
        "name": "Fn"
      }
    ],
    "examples": [
      "// Constructor function\n     var Widget = config => {\n       // ...\n     };\n     Widget.prototype = {\n       // ...\n     };\n     var allConfigs = [\n       // ...\n     ];\n     R.map(R.construct(Widget), allConfigs); // a list of Widgets"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A wrapped, curried constructor function."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(* -> {*}) -> (* -> {*})"
      }
    ],
    "meta": {
      "lineno": 7686,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 222
  },
  {
    "id": "R.lift",
    "longname": "R.lift",
    "name": "lift",
    "scope": "static",
    "kind": "function",
    "description": "\"lifts\" a function of arity > 1 so that it may \"map over\" a list, Function or other\nobject that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to lift into higher context",
        "name": "fn"
      }
    ],
    "examples": [
      "var madd3 = R.lift(R.curry((a, b, c) => a + b + c));\n\n     madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]\n\n     var madd5 = R.lift(R.curry((a, b, c, d, e) => a + b + c + d + e));\n\n     madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The lifted function."
      }
    ],
    "since": "v0.7.0",
    "category": "Function",
    "see": [
      "R.liftN"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(*... -> *) -> ([*]... -> [*])"
      }
    ],
    "meta": {
      "lineno": 7786,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 226
  },
  {
    "id": "R.pipeK",
    "longname": "R.pipeK",
    "name": "pipeK",
    "scope": "static",
    "kind": "function",
    "description": "Returns the left-to-right Kleisli composition of the provided functions,\neach of which must return a value of a type supported by [`chain`](#chain).\n\n`R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "variable": true
      }
    ],
    "examples": [
      "//  parseJson :: String -> Maybe *\n     //  get :: String -> Object -> Maybe *\n\n     //  getStateCode :: Maybe String -> Maybe String\n     var getStateCode = R.pipeK(\n       parseJson,\n       get('user'),\n       get('address'),\n       get('state'),\n       R.compose(Maybe.of, R.toUpper)\n     );\n\n     getStateCode(Maybe.of('{\"user\":{\"address\":{\"state\":\"ny\"}}}'));\n     //=> Just('NY')\n     getStateCode(Maybe.of('[Invalid JSON]'));\n     //=> Nothing()"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "Function",
    "see": [
      "R.composeK"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (m a -> m z)"
      }
    ],
    "meta": {
      "lineno": 7849,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 228
  },
  {
    "id": "R.invoker",
    "longname": "R.invoker",
    "name": "invoker",
    "scope": "static",
    "kind": "function",
    "description": "Turns a named method with a specified arity into a function that can be\ncalled directly supplied with arguments and a target object.\n\nThe returned function is curried and accepts `arity + 1` parameters where\nthe final parameter is the target object.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "Number of arguments the returned function should take\n       before the target object.",
        "name": "arity"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "Name of the method to call.",
        "name": "method"
      }
    ],
    "examples": [
      "var sliceFrom = R.invoker(1, 'slice');\n     sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'\n     var sliceFrom6 = R.invoker(2, 'slice')(6);\n     sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new curried function."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> String -> (a -> b -> ... -> n -> Object -> *)"
      }
    ],
    "meta": {
      "lineno": 8215,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 236
  },
  {
    "id": "R.memoize",
    "longname": "R.memoize",
    "name": "memoize",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new function that, when invoked, caches the result of calling `fn`\nfor a given argument set and returns the result. Subsequent calls to the\nmemoized `fn` with the same argument set will not result in an additional\ncall to `fn`; instead, the cached result for that set of arguments will be\nreturned.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to memoize.",
        "name": "fn"
      }
    ],
    "examples": [
      "var count = 0;\n     var factorial = R.memoize(n => {\n       count += 1;\n       return R.product(R.range(1, n + 1));\n     });\n     factorial(5); //=> 120\n     factorial(5); //=> 120\n     factorial(5); //=> 120\n     count; //=> 1"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "Memoized version of `fn`."
      }
    ],
    "since": "v0.1.0",
    "category": "Function",
    "customTags": [
      {
        "tag": "sig",
        "value": "(*... -> a) -> (*... -> a)"
      }
    ],
    "meta": {
      "lineno": 8272,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 238
  },
  {
    "id": "R.adjust",
    "longname": "R.adjust",
    "name": "adjust",
    "scope": "static",
    "kind": "function",
    "description": "Applies a function to the value at the given index of an array, returning a\nnew copy of the array with the element at the given index replaced with the\nresult of the function application.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to apply.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The index.",
        "name": "idx"
      },
      {
        "type": {
          "names": [
            "Array",
            "Arguments"
          ]
        },
        "description": "An array-like object whose value\n       at the supplied index will be replaced.",
        "name": "list"
      }
    ],
    "examples": [
      "R.adjust(R.add(10), 1, [0, 1, 2]);     //=> [0, 11, 2]\n     R.adjust(R.add(10))(1)([0, 1, 2]);     //=> [0, 11, 2]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A copy of the supplied array-like object with\n        the element at index `idx` replaced with the value\n        returned by applying `fn` to the existing element."
      }
    ],
    "since": "v0.14.0",
    "category": "List",
    "see": [
      "R.update"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> a) -> Number -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 984,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 13
  },
  {
    "id": "R.all",
    "longname": "R.all",
    "name": "all",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if all elements of the list match the predicate, `false` if\nthere are any that don't.\n\nDispatches to the `all` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The predicate function.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var lessThan2 = R.flip(R.lt)(2);\n     var lessThan3 = R.flip(R.lt)(3);\n     R.all(lessThan2)([1, 2]); //=> false\n     R.all(lessThan3)([1, 2]); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if the predicate is satisfied by every element, `false`\n        otherwise."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.any, R.none, R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> Boolean"
      }
    ],
    "meta": {
      "lineno": 1020,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 14
  },
  {
    "id": "R.any",
    "longname": "R.any",
    "name": "any",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if at least one of elements of the list match the predicate,\n`false` otherwise.\n\nDispatches to the `any` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The predicate function.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var lessThan0 = R.flip(R.lt)(0);\n     var lessThan2 = R.flip(R.lt)(2);\n     R.any(lessThan0)([1, 2]); //=> false\n     R.any(lessThan2)([1, 2]); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if the predicate is satisfied by at least one element, `false`\n        otherwise."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.all, R.none, R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> Boolean"
      }
    ],
    "meta": {
      "lineno": 1104,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 17
  },
  {
    "id": "R.aperture",
    "longname": "R.aperture",
    "name": "aperture",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list, composed of n-tuples of consecutive elements If `n` is\ngreater than the length of the list, an empty list is returned.\n\nDispatches to the `aperture` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The size of the tuples to create",
        "name": "n"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to split into `n`-tuples",
        "name": "list"
      }
    ],
    "examples": [
      "R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]\n     R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]\n     R.aperture(7, [1, 2, 3, 4, 5]); //=> []"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The new list."
      }
    ],
    "since": "v0.12.0",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> [[a]]"
      }
    ],
    "meta": {
      "lineno": 1138,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 18
  },
  {
    "id": "R.append",
    "longname": "R.append",
    "name": "append",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing the contents of the given list, followed by\nthe given element.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The element to add to the end of the new list.",
        "name": "el"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list whose contents will be added to the beginning of the output\n       list.",
        "name": "list"
      }
    ],
    "examples": [
      "R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']\n     R.append('tests', []); //=> ['tests']\n     R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new list containing the contents of the old list followed by `el`."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.prepend"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 1160,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 19
  },
  {
    "id": "R.dropWhile",
    "longname": "R.dropWhile",
    "name": "dropWhile",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing the last `n` elements of a given list, passing\neach value to the supplied predicate function, skipping elements while the\npredicate function returns `true`. The predicate function is passed one\nargument: *(value)*.\n\nDispatches to the `dropWhile` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function called per iteration.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The collection to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var lteTwo = x => x <= 2;\n\n     R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new array."
      }
    ],
    "since": "v0.9.0",
    "category": "List",
    "see": [
      "R.takeWhile, R.transduce, R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 1555,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 33
  },
  {
    "id": "R.find",
    "longname": "R.find",
    "name": "find",
    "scope": "static",
    "kind": "function",
    "description": "Returns the first element of the list which matches the predicate, or\n`undefined` if no element matches.\n\nDispatches to the `find` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The predicate function used to determine if the element is the\n       desired one.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var xs = [{a: 1}, {a: 2}, {a: 3}];\n     R.find(R.propEq('a', 2))(xs); //=> {a: 2}\n     R.find(R.propEq('a', 4))(xs); //=> undefined"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The element found, or `undefined`."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> a | undefined"
      }
    ],
    "meta": {
      "lineno": 1656,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 36
  },
  {
    "id": "R.findIndex",
    "longname": "R.findIndex",
    "name": "findIndex",
    "scope": "static",
    "kind": "function",
    "description": "Returns the index of the first element of the list which matches the\npredicate, or `-1` if no element matches.\n\nDispatches to the `findIndex` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The predicate function used to determine if the element is the\ndesired one.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var xs = [{a: 1}, {a: 2}, {a: 3}];\n     R.findIndex(R.propEq('a', 2))(xs); //=> 1\n     R.findIndex(R.propEq('a', 4))(xs); //=> -1"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The index of the element found, or `-1`."
      }
    ],
    "since": "v0.1.1",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> Number"
      }
    ],
    "meta": {
      "lineno": 1691,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 37
  },
  {
    "id": "R.findLast",
    "longname": "R.findLast",
    "name": "findLast",
    "scope": "static",
    "kind": "function",
    "description": "Returns the last element of the list which matches the predicate, or\n`undefined` if no element matches.\n\nDispatches to the `findLast` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The predicate function used to determine if the element is the\ndesired one.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var xs = [{a: 1, b: 0}, {a:1, b: 1}];\n     R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}\n     R.findLast(R.propEq('a', 4))(xs); //=> undefined"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The element found, or `undefined`."
      }
    ],
    "since": "v0.1.1",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> a | undefined"
      }
    ],
    "meta": {
      "lineno": 1727,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 38
  },
  {
    "id": "R.findLastIndex",
    "longname": "R.findLastIndex",
    "name": "findLastIndex",
    "scope": "static",
    "kind": "function",
    "description": "Returns the index of the last element of the list which matches the\npredicate, or `-1` if no element matches.\n\nDispatches to the `findLastIndex` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The predicate function used to determine if the element is the\ndesired one.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var xs = [{a: 1, b: 0}, {a:1, b: 1}];\n     R.findLastIndex(R.propEq('a', 1))(xs); //=> 1\n     R.findLastIndex(R.propEq('a', 4))(xs); //=> -1"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The index of the element found, or `-1`."
      }
    ],
    "since": "v0.1.1",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> Number"
      }
    ],
    "meta": {
      "lineno": 1761,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 39
  },
  {
    "id": "R.forEach",
    "longname": "R.forEach",
    "name": "forEach",
    "scope": "static",
    "kind": "function",
    "description": "Iterate over an input `list`, calling a provided function `fn` for each\nelement in the list.\n\n`fn` receives one argument: *(value)*.\n\nNote: `R.forEach` does not skip deleted or unassigned indices (sparse\narrays), unlike the native `Array.prototype.forEach` method. For more\ndetails on this behavior, see:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description\n\nAlso note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns\nthe original array. In some libraries this function is named `each`.\n\nDispatches to the `forEach` method of the second argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to invoke. Receives one argument, `value`.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var printXPlusFive = x => console.log(x + 5);\n     R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]\n     //-> 6\n     //-> 7\n     //-> 8"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The original list."
      }
    ],
    "since": "v0.1.1",
    "category": "List",
    "see": [
      "R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> *) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 1805,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 40
  },
  {
    "id": "R.fromPairs",
    "longname": "R.fromPairs",
    "name": "fromPairs",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new object out of a list key-value pairs.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of two-element arrays that will be the keys and values of the output object.",
        "name": "pairs"
      }
    ],
    "examples": [
      "R.fromPairs([['a', 1], ['b', 2],  ['c', 3]]); //=> {a: 1, b: 2, c: 3}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object made by pairing up `keys` and `values`."
      }
    ],
    "since": "v0.3.0",
    "category": "List",
    "see": [
      "R.toPairs, R.pair"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[[k,v]] -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 1830,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 41
  },
  {
    "id": "R.groupWith",
    "longname": "R.groupWith",
    "name": "groupWith",
    "scope": "static",
    "kind": "function",
    "description": "Takes a list and returns a list of lists where each sublist's elements are\nall \"equal\" according to the provided equality function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "Function for determining whether two given (adjacent)\n       elements should be in the same group",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to group. Also accepts a string, which will be\n       treated as a list of characters.",
        "name": "list"
      }
    ],
    "examples": [
      "groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])\n   // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]\n\n   groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])\n   // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]\n\n   R.groupWith(R.eqBy(isVowel), 'aestiou')\n   // ['ae', 'st', 'iou']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "List"
          ]
        },
        "description": "A list that contains sublists of equal elements,\n        whose concatenations is equal to the original list."
      }
    ],
    "since": "v0.21.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a, a -> Boolean) -> [a] -> [[a]]"
      }
    ],
    "meta": {
      "lineno": 1869,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 42
  },
  {
    "id": "R.insert",
    "longname": "R.insert",
    "name": "insert",
    "scope": "static",
    "kind": "function",
    "description": "Inserts the supplied element into the list, at index `index`. _Note that\nthis is not destructive_: it returns a copy of the list with the changes.\n<small>No lists have been harmed in the application of this function.</small>",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The position to insert the element",
        "name": "index"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The element to insert into the Array",
        "name": "elt"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to insert into",
        "name": "list"
      }
    ],
    "examples": [
      "R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new Array with `elt` inserted at `index`."
      }
    ],
    "since": "v0.2.2",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> a -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 2115,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 51
  },
  {
    "id": "R.insertAll",
    "longname": "R.insertAll",
    "name": "insertAll",
    "scope": "static",
    "kind": "function",
    "description": "Inserts the sub-list into the list, at index `index`. _Note that this is not\ndestructive_: it returns a copy of the list with the changes.\n<small>No lists have been harmed in the application of this function.</small>",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The position to insert the sub-list",
        "name": "index"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The sub-list to insert into the Array",
        "name": "elts"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to insert the sub-list into",
        "name": "list"
      }
    ],
    "examples": [
      "R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new Array with `elts` inserted starting at `index`."
      }
    ],
    "since": "v0.9.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 2140,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 52
  },
  {
    "id": "R.intersperse",
    "longname": "R.intersperse",
    "name": "intersperse",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new list with the separator interposed between elements.\n\nDispatches to the `intersperse` method of the second argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The element to add to the list.",
        "name": "separator"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to be interposed.",
        "name": "list"
      }
    ],
    "examples": [
      "R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The new list."
      }
    ],
    "since": "v0.14.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 2162,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 53
  },
  {
    "id": "R.length",
    "longname": "R.length",
    "name": "length",
    "scope": "static",
    "kind": "function",
    "description": "Returns the number of elements in the array by returning `list.length`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to inspect.",
        "name": "list"
      }
    ],
    "examples": [
      "R.length([]); //=> 0\n     R.length([1, 2, 3]); //=> 3"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The length of the array."
      }
    ],
    "since": "v0.3.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> Number"
      }
    ],
    "meta": {
      "lineno": 2387,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 59
  },
  {
    "id": "R.mapAccum",
    "longname": "R.mapAccum",
    "name": "mapAccum",
    "scope": "static",
    "kind": "function",
    "description": "The mapAccum function behaves like a combination of map and reduce; it\napplies a function to each element of a list, passing an accumulating\nparameter from left to right, and returning a final value of this\naccumulator together with the new list.\n\nThe iterator function receives two arguments, *acc* and *value*, and should\nreturn a tuple *[acc, value]*.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to be called on every element of the input `list`.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The accumulator value.",
        "name": "acc"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var digits = ['1', '2', '3', '4'];\n     var appender = (a, b) => [a + b, a + b];\n\n     R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The final, accumulated value."
      }
    ],
    "since": "v0.10.0",
    "category": "List",
    "see": [
      "R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])"
      }
    ],
    "meta": {
      "lineno": 2467,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 62
  },
  {
    "id": "R.mapAccumRight",
    "longname": "R.mapAccumRight",
    "name": "mapAccumRight",
    "scope": "static",
    "kind": "function",
    "description": "The mapAccumRight function behaves like a combination of map and reduce; it\napplies a function to each element of a list, passing an accumulating\nparameter from right to left, and returning a final value of this\naccumulator together with the new list.\n\nSimilar to `mapAccum`, except moves through the input list from the right to\nthe left.\n\nThe iterator function receives two arguments, *acc* and *value*, and should\nreturn a tuple *[acc, value]*.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to be called on every element of the input `list`.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The accumulator value.",
        "name": "acc"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var digits = ['1', '2', '3', '4'];\n     var append = (a, b) => [a + b, a + b];\n\n     R.mapAccumRight(append, 0, digits); //=> ['04321', ['04321', '0432', '043', '04']]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The final, accumulated value."
      }
    ],
    "since": "v0.10.0",
    "category": "List",
    "see": [
      "R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])"
      }
    ],
    "meta": {
      "lineno": 2512,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 63
  },
  {
    "id": "R.mergeAll",
    "longname": "R.mergeAll",
    "name": "mergeAll",
    "scope": "static",
    "kind": "function",
    "description": "Merges a list of objects together into one object.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of objects",
        "name": "list"
      }
    ],
    "examples": [
      "R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}\n     R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "A merged object."
      }
    ],
    "since": "v0.10.0",
    "category": "List",
    "see": [
      "R.reduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[{k: v}] -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 2685,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 69
  },
  {
    "id": "R.none",
    "longname": "R.none",
    "name": "none",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if no elements of the list match the predicate, `false`\notherwise.\n\nDispatches to the `any` method of the second argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The predicate function.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var isEven = n => n % 2 === 0;\n\n     R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true\n     R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if the predicate is not satisfied by every element, `false` otherwise."
      }
    ],
    "since": "v0.12.0",
    "category": "List",
    "see": [
      "R.all, R.any"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> Boolean"
      }
    ],
    "meta": {
      "lineno": 2950,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 77
  },
  {
    "id": "R.nth",
    "longname": "R.nth",
    "name": "nth",
    "scope": "static",
    "kind": "function",
    "description": "Returns the nth element of the given list or string. If n is negative the\nelement at index length + n is returned.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "offset"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "var list = ['foo', 'bar', 'baz', 'quux'];\n     R.nth(1, list); //=> 'bar'\n     R.nth(-1, list); //=> 'quux'\n     R.nth(-99, list); //=> undefined\n\n     R.nth(2, 'abc'); //=> 'c'\n     R.nth(3, 'abc'); //=> ''"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> a | Undefined"
      },
      {
        "tag": "sig",
        "value": "Number -> String -> String"
      }
    ],
    "meta": {
      "lineno": 2998,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 79
  },
  {
    "id": "R.pair",
    "longname": "R.pair",
    "name": "pair",
    "scope": "static",
    "kind": "function",
    "description": "Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "fst"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "snd"
      }
    ],
    "examples": [
      "R.pair('foo', 'bar'); //=> ['foo', 'bar']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.18.0",
    "category": "List",
    "see": [
      "R.objOf, R.of"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> b -> (a,b)"
      }
    ],
    "meta": {
      "lineno": 3190,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 86
  },
  {
    "id": "R.prepend",
    "longname": "R.prepend",
    "name": "prepend",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list with the given element at the front, followed by the\ncontents of the list.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The item to add to the head of the output list.",
        "name": "el"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to add to the tail of the output list.",
        "name": "list"
      }
    ],
    "examples": [
      "R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new array."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.append"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 3377,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 93
  },
  {
    "id": "R.range",
    "longname": "R.range",
    "name": "range",
    "scope": "static",
    "kind": "function",
    "description": "Returns a list of numbers from `from` (inclusive) to `to` (exclusive).",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The first number in the list.",
        "name": "from"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "One more than the last number in the list.",
        "name": "to"
      }
    ],
    "examples": [
      "R.range(1, 5);    //=> [1, 2, 3, 4]\n     R.range(50, 53);  //=> [50, 51, 52]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list of numbers in tthe set `[a, b)`."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> [Number]"
      }
    ],
    "meta": {
      "lineno": 3501,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 98
  },
  {
    "id": "R.reduceRight",
    "longname": "R.reduceRight",
    "name": "reduceRight",
    "scope": "static",
    "kind": "function",
    "description": "Returns a single item by iterating through the list, successively calling\nthe iterator function and passing it an accumulator value and the current\nvalue from the array, and then passing the result to the next call.\n\nSimilar to `reduce`, except moves through the input list from the right to\nthe left.\n\nThe iterator function receives two values: *(acc, value)*\n\nNote: `R.reduceRight` does not skip deleted or unassigned indices (sparse\narrays), unlike the native `Array.prototype.reduce` method. For more details\non this behavior, see:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The iterator function. Receives two values, the accumulator and the\n       current element from the array.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The accumulator value.",
        "name": "acc"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var pairs = [ ['a', 1], ['b', 2], ['c', 3] ];\n     var flattenPairs = (acc, pair) => acc.concat(pair);\n\n     R.reduceRight(flattenPairs, [], pairs); //=> [ 'c', 3, 'b', 2, 'a', 1 ]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The final, accumulated value."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a,b -> a) -> a -> [b] -> a"
      }
    ],
    "meta": {
      "lineno": 3547,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 99
  },
  {
    "id": "R.reduced",
    "longname": "R.reduced",
    "name": "reduced",
    "scope": "static",
    "kind": "function",
    "description": "Returns a value wrapped to indicate that it is the final value of the reduce\nand transduce functions. The returned value should be considered a black\nbox: the internal structure is not guaranteed to be stable.\n\nNote: this optimization is unavailable to functions not explicitly listed\nabove. For instance, it is not currently supported by reduceRight.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The final value of the reduce.",
        "name": "x"
      }
    ],
    "examples": [
      "R.reduce(\n       R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),\n       0,\n       [1, 2, 3, 4, 5]) // 10"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The wrapped value."
      }
    ],
    "since": "v0.15.0",
    "category": "List",
    "see": [
      "R.reduce, R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> *"
      }
    ],
    "meta": {
      "lineno": 3579,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 100
  },
  {
    "id": "R.remove",
    "longname": "R.remove",
    "name": "remove",
    "scope": "static",
    "kind": "function",
    "description": "Removes the sub-list of `list` starting at index `start` and containing\n`count` elements. _Note that this is not destructive_: it returns a copy of\nthe list with the changes.\n<small>No lists have been harmed in the application of this function.</small>",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The position to start removing elements",
        "name": "start"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The number of elements to remove",
        "name": "count"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to remove from",
        "name": "list"
      }
    ],
    "examples": [
      "R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new Array with `count` elements from `start` removed."
      }
    ],
    "since": "v0.2.2",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 3600,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 101
  },
  {
    "id": "R.reverse",
    "longname": "R.reverse",
    "name": "reverse",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list or string with the elements or characters in reverse\norder.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array",
            "String"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.reverse([1, 2, 3]);  //=> [3, 2, 1]\n     R.reverse([1, 2]);     //=> [2, 1]\n     R.reverse([1]);        //=> [1]\n     R.reverse([]);         //=> []\n\n     R.reverse('abc');      //=> 'cba'\n     R.reverse('ab');       //=> 'ba'\n     R.reverse('a');        //=> 'a'\n     R.reverse('');         //=> ''"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array",
            "String"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "String -> String"
      }
    ],
    "meta": {
      "lineno": 3652,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 103
  },
  {
    "id": "R.scan",
    "longname": "R.scan",
    "name": "scan",
    "scope": "static",
    "kind": "function",
    "description": "Scan is similar to reduce, but returns a list of successively reduced values\nfrom the left",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The iterator function. Receives two values, the accumulator and the\n       current element from the array",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The accumulator value.",
        "name": "acc"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var numbers = [1, 2, 3, 4];\n     var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A list of all intermediately reduced values."
      }
    ],
    "since": "v0.10.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a,b -> a) -> a -> [b] -> [a]"
      }
    ],
    "meta": {
      "lineno": 3675,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 104
  },
  {
    "id": "R.slice",
    "longname": "R.slice",
    "name": "slice",
    "scope": "static",
    "kind": "function",
    "description": "Returns the elements of the given list or string (or object with a `slice`\nmethod) from `fromIndex` (inclusive) to `toIndex` (exclusive).\n\nDispatches to the `slice` method of the third argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The start index (inclusive).",
        "name": "fromIndex"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The end index (exclusive).",
        "name": "toIndex"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']\n     R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']\n     R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']\n     R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']\n     R.slice(0, 3, 'ramda');                     //=> 'ram'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.4",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> [a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "Number -> Number -> String -> String"
      }
    ],
    "meta": {
      "lineno": 3737,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 106
  },
  {
    "id": "R.sort",
    "longname": "R.sort",
    "name": "sort",
    "scope": "static",
    "kind": "function",
    "description": "Returns a copy of the list, sorted according to the comparator function,\nwhich should accept two values at a time and return a negative number if the\nfirst value is smaller, a positive number if it's larger, and zero if they\nare equal. Please note that this is a **copy** of the list. It does not\nmodify the original.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A sorting function :: a -> b -> Int",
        "name": "comparator"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to sort",
        "name": "list"
      }
    ],
    "examples": [
      "var diff = function(a, b) { return a - b; };\n     R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "a new array with its elements sorted by the comparator function."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a,a -> Number) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 3761,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 107
  },
  {
    "id": "R.splitAt",
    "longname": "R.splitAt",
    "name": "splitAt",
    "scope": "static",
    "kind": "function",
    "description": "Splits a given list or string at a given index.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The index where the array/string is split.",
        "name": "index"
      },
      {
        "type": {
          "names": [
            "Array",
            "String"
          ]
        },
        "description": "The array/string to be split.",
        "name": "array"
      }
    ],
    "examples": [
      "R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]\n     R.splitAt(5, 'hello world');      //=> ['hello', ' world']\n     R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.19.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> [[a], [a]]"
      },
      {
        "tag": "sig",
        "value": "Number -> String -> [String, String]"
      }
    ],
    "meta": {
      "lineno": 3823,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 109
  },
  {
    "id": "R.splitEvery",
    "longname": "R.splitEvery",
    "name": "splitEvery",
    "scope": "static",
    "kind": "function",
    "description": "Splits a collection into slices of the specified length.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "n"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]\n     R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> [[a]]"
      },
      {
        "tag": "sig",
        "value": "Number -> String -> [String]"
      }
    ],
    "meta": {
      "lineno": 3847,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 110
  },
  {
    "id": "R.splitWhen",
    "longname": "R.splitWhen",
    "name": "splitWhen",
    "scope": "static",
    "kind": "function",
    "description": "Takes a list and a predicate and returns a pair of lists with the following properties:\n\n - the result of concatenating the two output lists is equivalent to the input list;\n - none of the elements of the first output list satisfies the predicate; and\n - if the second output list is non-empty, its first element satisfies the predicate.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The predicate that determines where the array is split.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to be split.",
        "name": "list"
      }
    ],
    "examples": [
      "R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.19.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> [[a], [a]]"
      }
    ],
    "meta": {
      "lineno": 3878,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 111
  },
  {
    "id": "R.tail",
    "longname": "R.tail",
    "name": "tail",
    "scope": "static",
    "kind": "function",
    "description": "Returns all but the first element of the given list or string (or object\nwith a `tail` method).\n\nDispatches to the `slice` method of the first argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.tail([1, 2, 3]);  //=> [2, 3]\n     R.tail([1, 2]);     //=> [2]\n     R.tail([1]);        //=> []\n     R.tail([]);         //=> []\n\n     R.tail('abc');  //=> 'bc'\n     R.tail('ab');   //=> 'b'\n     R.tail('a');    //=> ''\n     R.tail('');     //=> ''"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.head, R.init, R.last"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "String -> String"
      }
    ],
    "meta": {
      "lineno": 3946,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 113
  },
  {
    "id": "R.take",
    "longname": "R.take",
    "name": "take",
    "scope": "static",
    "kind": "function",
    "description": "Returns the first `n` elements of the given list, string, or\ntransducer/transformer (or object with a `take` method).\n\nDispatches to the `take` method of the second argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "n"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']\n     R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']\n     R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\n     R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\n     R.take(3, 'ramda');               //=> 'ram'\n\n     var personnel = [\n       'Dave Brubeck',\n       'Paul Desmond',\n       'Eugene Wright',\n       'Joe Morello',\n       'Gerry Mulligan',\n       'Bob Bates',\n       'Joe Dodge',\n       'Ron Crotty'\n     ];\n\n     var takeFive = R.take(5);\n     takeFive(personnel);\n     //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.drop"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "Number -> String -> String"
      }
    ],
    "meta": {
      "lineno": 3987,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 114
  },
  {
    "id": "R.takeLastWhile",
    "longname": "R.takeLastWhile",
    "name": "takeLastWhile",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing the last `n` elements of a given list, passing\neach value to the supplied predicate function, and terminating when the\npredicate function returns `false`. Excludes the element that caused the\npredicate function to fail. The predicate function is passed one argument:\n*(value)*.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function called per iteration.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The collection to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var isNotOne = x => x !== 1;\n\n     R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new array."
      }
    ],
    "since": "v0.16.0",
    "category": "List",
    "see": [
      "R.dropLastWhile, R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 4013,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 115
  },
  {
    "id": "R.takeWhile",
    "longname": "R.takeWhile",
    "name": "takeWhile",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing the first `n` elements of a given list,\npassing each value to the supplied predicate function, and terminating when\nthe predicate function returns `false`. Excludes the element that caused the\npredicate function to fail. The predicate function is passed one argument:\n*(value)*.\n\nDispatches to the `takeWhile` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function called per iteration.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The collection to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var isNotFour = x => x !== 4;\n\n     R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new array."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.dropWhile, R.transduce, R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 4047,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 116
  },
  {
    "id": "R.times",
    "longname": "R.times",
    "name": "times",
    "scope": "static",
    "kind": "function",
    "description": "Calls an input function `n` times, returning an array containing the results\nof those function calls.\n\n`fn` is passed one argument: The current value of `n`, which begins at `0`\nand is gradually incremented to `n - 1`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to invoke. Passed one argument, the current value of `n`.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "A value between `0` and `n - 1`. Increments after each function call.",
        "name": "n"
      }
    ],
    "examples": [
      "R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array containing the return values of all calls to `fn`."
      }
    ],
    "since": "v0.2.3",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(Number -> a) -> Number -> [a]"
      }
    ],
    "meta": {
      "lineno": 4097,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 118
  },
  {
    "id": "R.transpose",
    "longname": "R.transpose",
    "name": "transpose",
    "scope": "static",
    "kind": "function",
    "description": "Transposes the rows and columns of a 2D list.\nWhen passed a list of `n` lists of length `x`,\nreturns a list of `x` lists of length `n`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A 2D list",
        "name": "list"
      }
    ],
    "examples": [
      "R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]\n     R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]\n\nIf some of the rows are shorter than the following rows, their elements are skipped:\n\n     R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A 2D list"
      }
    ],
    "since": "v0.19.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[[a]] -> [[a]]"
      }
    ],
    "meta": {
      "lineno": 4197,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 121
  },
  {
    "id": "R.unfold",
    "longname": "R.unfold",
    "name": "unfold",
    "scope": "static",
    "kind": "function",
    "description": "Builds a list from a seed value. Accepts an iterator function, which returns\neither false to stop iteration or an array of length 2 containing the value\nto add to the resulting list and the seed to be used in the next call to the\niterator function.\n\nThe iterator function receives one argument: *(seed)*.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The iterator function. receives one argument, `seed`, and returns\n       either false to quit iteration or an array of length two to proceed. The element\n       at index 0 of this array will be added to the resulting array, and the element\n       at index 1 will be passed to the next call to `fn`.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The seed value.",
        "name": "seed"
      }
    ],
    "examples": [
      "var f = n => n > 50 ? false : [-n, n + 10];\n     R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The final list."
      }
    ],
    "since": "v0.10.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> [b]) -> * -> [b]"
      }
    ],
    "meta": {
      "lineno": 4423,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 128
  },
  {
    "id": "R.uniqWith",
    "longname": "R.uniqWith",
    "name": "uniqWith",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing only one copy of each element in the original\nlist, based upon the value returned by applying the supplied predicate to\ntwo list elements. Prefers the first item if two items compare equal based\non the predicate.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate used to test whether two items are equal.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var strEq = R.eqBy(String);\n     R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]\n     R.uniqWith(strEq)([{}, {}]);       //=> [{}]\n     R.uniqWith(strEq)([1, '1', 1]);    //=> [1]\n     R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list of unique items."
      }
    ],
    "since": "v0.2.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a, a -> Boolean) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 4455,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 129
  },
  {
    "id": "R.update",
    "longname": "R.update",
    "name": "update",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new copy of the array with the element at the provided index\nreplaced with the given value.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The index to update.",
        "name": "idx"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value to exist at the given index of the returned array.",
        "name": "x"
      },
      {
        "type": {
          "names": [
            "Array",
            "Arguments"
          ]
        },
        "description": "The source array-like object to be updated.",
        "name": "list"
      }
    ],
    "examples": [
      "R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]\n     R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A copy of `list` with the value at index `idx` replaced with `x`."
      }
    ],
    "since": "v0.14.0",
    "category": "List",
    "see": [
      "R.adjust"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> a -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 4545,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 132
  },
  {
    "id": "R.xprod",
    "longname": "R.xprod",
    "name": "xprod",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new list out of the two supplied by creating each possible pair\nfrom the lists.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first list.",
        "name": "as"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second list.",
        "name": "bs"
      }
    ],
    "examples": [
      "R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list made by combining each possible pair from\n        `as` and `bs` into pairs (`[a, b]`)."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [b] -> [[a,b]]"
      }
    ],
    "meta": {
      "lineno": 4811,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 140
  },
  {
    "id": "R.zip",
    "longname": "R.zip",
    "name": "zip",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new list out of the two supplied by pairing up equally-positioned\nitems from both lists. The returned list is truncated to the length of the\nshorter of the two input lists.\nNote: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first array to consider.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second array to consider.",
        "name": "list2"
      }
    ],
    "examples": [
      "R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list made by pairing up same-indexed elements of `list1` and `list2`."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [b] -> [[a,b]]"
      }
    ],
    "meta": {
      "lineno": 4850,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 141
  },
  {
    "id": "R.zipObj",
    "longname": "R.zipObj",
    "name": "zipObj",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new object out of a list of keys and a list of values.\nKey/value pairing is truncated to the length of the shorter of the two lists.\nNote: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array that will be properties on the output object.",
        "name": "keys"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list of values on the output object.",
        "name": "values"
      }
    ],
    "examples": [
      "R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object made by pairing up same-indexed elements of `keys` and `values`."
      }
    ],
    "since": "v0.3.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[String] -> [*] -> {String: *}"
      }
    ],
    "meta": {
      "lineno": 4881,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 142
  },
  {
    "id": "R.zipWith",
    "longname": "R.zipWith",
    "name": "zipWith",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new list out of the two supplied by applying the function to each\nequally-positioned pair in the lists. The returned list is truncated to the\nlength of the shorter of the two input lists.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function used to combine the two elements into one value.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first array to consider.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second array to consider.",
        "name": "list2"
      }
    ],
    "examples": [
      "var f = (x, y) => {\n       // ...\n     };\n     R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);\n     //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list made by combining same-indexed elements of `list1` and `list2`\n        using `fn`."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a,b -> c) -> [a] -> [b] -> [c]"
      }
    ],
    "meta": {
      "lineno": 4915,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 143
  },
  {
    "id": "R.drop",
    "longname": "R.drop",
    "name": "drop",
    "scope": "static",
    "kind": "function",
    "description": "Returns all but the first `n` elements of the given list, string, or\ntransducer/transformer (or object with a `drop` method).\n\nDispatches to the `drop` method of the second argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "n"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']\n     R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']\n     R.drop(3, ['foo', 'bar', 'baz']); //=> []\n     R.drop(4, ['foo', 'bar', 'baz']); //=> []\n     R.drop(3, 'ramda');               //=> 'da'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.take, R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "Number -> String -> String"
      }
    ],
    "meta": {
      "lineno": 5450,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 152
  },
  {
    "id": "R.dropLast",
    "longname": "R.dropLast",
    "name": "dropLast",
    "scope": "static",
    "kind": "function",
    "description": "Returns a list containing all but the last `n` elements of the given `list`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The number of elements of `xs` to skip.",
        "name": "n"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The collection to consider.",
        "name": "xs"
      }
    ],
    "examples": [
      "R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']\n     R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']\n     R.dropLast(3, ['foo', 'bar', 'baz']); //=> []\n     R.dropLast(4, ['foo', 'bar', 'baz']); //=> []\n     R.dropLast(3, 'ramda');               //=> 'ra'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "List",
    "see": [
      "R.takeLast"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "Number -> String -> String"
      }
    ],
    "meta": {
      "lineno": 5475,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 153
  },
  {
    "id": "R.dropLastWhile",
    "longname": "R.dropLastWhile",
    "name": "dropLastWhile",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing all but last the`n` elements of a given list,\npassing each value from the right to the supplied predicate function,\nskipping elements while the predicate function returns `true`. The predicate\nfunction is passed one argument: (value)*.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function called per iteration.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The collection to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var lteThree = x => x <= 3;\n\n     R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new array."
      }
    ],
    "since": "v0.16.0",
    "category": "List",
    "see": [
      "R.takeLastWhile, R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 5498,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 154
  },
  {
    "id": "R.filter",
    "longname": "R.filter",
    "name": "filter",
    "scope": "static",
    "kind": "function",
    "description": "Takes a predicate and a \"filterable\", and returns a new filterable of the\nsame type containing the members of the given filterable which satisfy the\ngiven predicate.\n\nDispatches to the `filter` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "filterable"
      }
    ],
    "examples": [
      "var isEven = n => n % 2 === 0;\n\n     R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]\n\n     R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.reject, R.transduce, R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Filterable f => (a -> Boolean) -> f a -> f a"
      }
    ],
    "meta": {
      "lineno": 5556,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 156
  },
  {
    "id": "R.flatten",
    "longname": "R.flatten",
    "name": "flatten",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list by pulling every item out of it (and all its sub-arrays)\nand putting them in a new array, depth-first.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);\n     //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The flattened list."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.unnest"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [b]"
      }
    ],
    "meta": {
      "lineno": 5583,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 157
  },
  {
    "id": "R.head",
    "longname": "R.head",
    "name": "head",
    "scope": "static",
    "kind": "function",
    "description": "Returns the first element of the given list or string. In some libraries\nthis function is named `first`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array",
            "String"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.head(['fi', 'fo', 'fum']); //=> 'fi'\n     R.head([]); //=> undefined\n\n     R.head('abc'); //=> 'a'\n     R.head(''); //=> ''"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.tail, R.init, R.last"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> a | Undefined"
      },
      {
        "tag": "sig",
        "value": "String -> String"
      }
    ],
    "meta": {
      "lineno": 5634,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 159
  },
  {
    "id": "R.init",
    "longname": "R.init",
    "name": "init",
    "scope": "static",
    "kind": "function",
    "description": "Returns all but the last element of the given list or string.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.init([1, 2, 3]);  //=> [1, 2]\n     R.init([1, 2]);     //=> [1]\n     R.init([1]);        //=> []\n     R.init([]);         //=> []\n\n     R.init('abc');  //=> 'ab'\n     R.init('ab');   //=> 'a'\n     R.init('a');    //=> ''\n     R.init('');     //=> ''"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "List",
    "see": [
      "R.last, R.head, R.tail"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "String -> String"
      }
    ],
    "meta": {
      "lineno": 5660,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 160
  },
  {
    "id": "R.into",
    "longname": "R.into",
    "name": "into",
    "scope": "static",
    "kind": "function",
    "description": "Transforms the items of the list with the transducer and appends the\ntransformed items to the accumulator using an appropriate iterator function\nbased on the accumulator type.\n\nThe accumulator can be an array, string, object or a transformer. Iterated\nitems will be appended to arrays and concatenated to strings. Objects will\nbe merged directly or 2-item arrays will be merged as key, value pairs.\n\nThe accumulator can also be a transformer object that provides a 2-arity\nreducing iterator function, step, 0-arity initial value function, init, and\n1-arity result extraction function result. The step function is used as the\niterator function in reduce. The result function is used to convert the\nfinal accumulator into the return type and in most cases is R.identity. The\ninit function is used to provide the initial accumulator.\n\nThe iteration is performed with R.reduce after initializing the transducer.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The initial accumulator value.",
        "name": "acc"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The transducer function. Receives a transformer and returns a transformer.",
        "name": "xf"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var numbers = [1, 2, 3, 4];\n     var transducer = R.compose(R.map(R.add(1)), R.take(2));\n\n     R.into([], transducer, numbers); //=> [2, 3]\n\n     var intoArray = R.into([]);\n     intoArray(transducer, numbers); //=> [2, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The final, accumulated value."
      }
    ],
    "since": "v0.12.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> (b -> b) -> [c] -> a"
      }
    ],
    "meta": {
      "lineno": 5754,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 162
  },
  {
    "id": "R.last",
    "longname": "R.last",
    "name": "last",
    "scope": "static",
    "kind": "function",
    "description": "Returns the last element of the given list or string.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.last(['fi', 'fo', 'fum']); //=> 'fum'\n     R.last([]); //=> undefined\n\n     R.last('abc'); //=> 'c'\n     R.last(''); //=> ''"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.4",
    "category": "List",
    "see": [
      "R.init, R.head, R.tail"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> a | Undefined"
      },
      {
        "tag": "sig",
        "value": "String -> String"
      }
    ],
    "meta": {
      "lineno": 5879,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 166
  },
  {
    "id": "R.lastIndexOf",
    "longname": "R.lastIndexOf",
    "name": "lastIndexOf",
    "scope": "static",
    "kind": "function",
    "description": "Returns the position of the last occurrence of an item in an array, or -1 if\nthe item is not included in the array. `R.equals` is used to determine\nequality.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The item to find.",
        "name": "target"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to search in.",
        "name": "xs"
      }
    ],
    "examples": [
      "R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6\n     R.lastIndexOf(10, [1,2,3,4]); //=> -1"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "the index of the target, or -1 if the target is not found."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.indexOf"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> [a] -> Number"
      }
    ],
    "meta": {
      "lineno": 5900,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 167
  },
  {
    "id": "R.map",
    "longname": "R.map",
    "name": "map",
    "scope": "static",
    "kind": "function",
    "description": "Takes a function and\na [functor](https://github.com/fantasyland/fantasy-land#functor),\napplies the function to each of the functor's values, and returns\na functor of the same shape.\n\nRamda provides suitable `map` implementations for `Array` and `Object`,\nso this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.\n\nDispatches to the `map` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.\n\nAlso treats functions as functors and will compose them together.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function to be called on every element of the input `list`.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to be iterated over.",
        "name": "list"
      }
    ],
    "examples": [
      "var double = x => x * 2;\n\n     R.map(double, [1, 2, 3]); //=> [2, 4, 6]\n\n     R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The new list."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.transduce, R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Functor f => (a -> b) -> f a -> f b"
      }
    ],
    "meta": {
      "lineno": 5947,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 168
  },
  {
    "id": "R.pluck",
    "longname": "R.pluck",
    "name": "pluck",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list by plucking the same named property off all objects in\nthe list supplied.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number",
            "String"
          ]
        },
        "description": "The key name to pluck off of each object.",
        "name": "key"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]\n     R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list of values for the given key."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.props"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "k -> [{k: v}] -> [v]"
      }
    ],
    "meta": {
      "lineno": 6120,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 174
  },
  {
    "id": "R.reduce",
    "longname": "R.reduce",
    "name": "reduce",
    "scope": "static",
    "kind": "function",
    "description": "Returns a single item by iterating through the list, successively calling\nthe iterator function and passing it an accumulator value and the current\nvalue from the array, and then passing the result to the next call.\n\nThe iterator function receives two values: *(acc, value)*. It may use\n`R.reduced` to shortcut the iteration.\n\nNote: `R.reduce` does not skip deleted or unassigned indices (sparse\narrays), unlike the native `Array.prototype.reduce` method. For more details\non this behavior, see:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description\n\nDispatches to the `reduce` method of the third argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The iterator function. Receives two values, the accumulator and the\n       current element from the array.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The accumulator value.",
        "name": "acc"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var numbers = [1, 2, 3];\n     var add = (a, b) => a + b;\n\n     R.reduce(add, 10, numbers); //=> 16"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The final, accumulated value."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.reduced, R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "((a, b) -> a) -> a -> [b] -> a"
      }
    ],
    "meta": {
      "lineno": 6234,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 178
  },
  {
    "id": "R.reduceBy",
    "longname": "R.reduceBy",
    "name": "reduceBy",
    "scope": "static",
    "kind": "function",
    "description": "Groups the elements of the list according to the result of calling\nthe String-returning function `keyFn` on each element and reduces the elements\nof each group to a single value via the reducer function `valueFn`.\n\nThis function is basically a more general `groupBy` function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function that reduces the elements of each group to a single\n       value. Receives two values, accumulator for a particular group and the current element.",
        "name": "valueFn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The (initial) accumulator value for each group.",
        "name": "acc"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function that maps the list's element into a key.",
        "name": "keyFn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to group.",
        "name": "list"
      }
    ],
    "examples": [
      "var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);\n     var namesByGrade = reduceToNamesBy(function(student) {\n       var score = student.score;\n       return score < 65 ? 'F' :\n              score < 70 ? 'D' :\n              score < 80 ? 'C' :\n              score < 90 ? 'B' : 'A';\n     });\n     var students = [{name: 'Lucy', score: 92},\n                     {name: 'Drew', score: 85},\n                     // ...\n                     {name: 'Bart', score: 62}];\n     namesByGrade(students);\n     // {\n     //   'A': ['Lucy'],\n     //   'B': ['Drew']\n     //   // ...,\n     //   'F': ['Bart']\n     // }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "An object with the output of `keyFn` for keys, mapped to the output of\n        `valueFn` for elements which produced that key when passed to `keyFn`."
      }
    ],
    "since": "v0.20.0",
    "category": "List",
    "see": [
      "R.groupBy, R.reduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}"
      }
    ],
    "meta": {
      "lineno": 6278,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 179
  },
  {
    "id": "R.reject",
    "longname": "R.reject",
    "name": "reject",
    "scope": "static",
    "kind": "function",
    "description": "The complement of `filter`.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "filterable"
      }
    ],
    "examples": [
      "var isOdd = (n) => n % 2 === 1;\n\n     R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]\n\n     R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.filter, R.transduce, R.addIndex"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Filterable f => (a -> Boolean) -> f a -> f a"
      }
    ],
    "meta": {
      "lineno": 6308,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 180
  },
  {
    "id": "R.repeat",
    "longname": "R.repeat",
    "name": "repeat",
    "scope": "static",
    "kind": "function",
    "description": "Returns a fixed list of size `n` containing a specified identical value.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value to repeat.",
        "name": "value"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The desired size of the output list.",
        "name": "n"
      }
    ],
    "examples": [
      "R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']\n\n     var obj = {};\n     var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]\n     repeatedObjs[0] === repeatedObjs[1]; //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new array containing `n` `value`s."
      }
    ],
    "since": "v0.1.1",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> n -> [a]"
      }
    ],
    "meta": {
      "lineno": 6331,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 181
  },
  {
    "id": "R.takeLast",
    "longname": "R.takeLast",
    "name": "takeLast",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing the last `n` elements of the given list.\nIf `n > list.length`, returns a list of `list.length` elements.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The number of elements to return.",
        "name": "n"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The collection to consider.",
        "name": "xs"
      }
    ],
    "examples": [
      "R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']\n     R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']\n     R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\n     R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']\n     R.takeLast(3, 'ramda');               //=> 'mda'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "List",
    "see": [
      "R.dropLast"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> [a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "Number -> String -> String"
      }
    ],
    "meta": {
      "lineno": 6374,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 183
  },
  {
    "id": "R.transduce",
    "longname": "R.transduce",
    "name": "transduce",
    "scope": "static",
    "kind": "function",
    "description": "Initializes a transducer using supplied iterator function. Returns a single\nitem by iterating through the list, successively calling the transformed\niterator function and passing it an accumulator value and the current value\nfrom the array, and then passing the result to the next call.\n\nThe iterator function receives two values: *(acc, value)*. It will be\nwrapped as a transformer to initialize the transducer. A transformer can be\npassed directly in place of an iterator function. In both cases, iteration\nmay be stopped early with the `R.reduced` function.\n\nA transducer is a function that accepts a transformer and returns a\ntransformer and can be composed directly.\n\nA transformer is an an object that provides a 2-arity reducing iterator\nfunction, step, 0-arity initial value function, init, and 1-arity result\nextraction function, result. The step function is used as the iterator\nfunction in reduce. The result function is used to convert the final\naccumulator into the return type and in most cases is R.identity. The init\nfunction can be used to provide an initial accumulator, but is ignored by\ntransduce.\n\nThe iteration is performed with R.reduce after initializing the transducer.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The transducer function. Receives a transformer and returns a transformer.",
        "name": "xf"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The iterator function. Receives two values, the accumulator and the\n       current element from the array. Wrapped as transformer, if necessary, and used to\n       initialize the transducer",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The initial accumulator value.",
        "name": "acc"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to iterate over.",
        "name": "list"
      }
    ],
    "examples": [
      "var numbers = [1, 2, 3, 4];\n     var transducer = R.compose(R.map(R.add(1)), R.take(2));\n\n     R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The final, accumulated value."
      }
    ],
    "since": "v0.12.0",
    "category": "List",
    "see": [
      "R.reduce, R.reduced, R.into"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(c -> c) -> (a,b -> a) -> a -> [b] -> a"
      }
    ],
    "meta": {
      "lineno": 6422,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 184
  },
  {
    "id": "R.allUniq",
    "longname": "R.allUniq",
    "name": "allUniq",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if all elements are unique, in `R.equals` terms, otherwise\n`false`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "R.allUniq(['1', 1]); //=> true\n     R.allUniq([1, 1]);   //=> false\n     R.allUniq([[42], [42]]); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if all elements are unique, else `false`."
      }
    ],
    "deprecated": "since v0.20.0",
    "since": "v0.18.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> Boolean"
      }
    ],
    "meta": {
      "lineno": 6631,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 188
  },
  {
    "id": "R.chain",
    "longname": "R.chain",
    "name": "chain",
    "scope": "static",
    "kind": "function",
    "description": "`chain` maps a function over a list and concatenates the results. `chain`\nis also known as `flatMap` in some libraries\n\nDispatches to the `chain` method of the second argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "var duplicate = n => [n, n];\n     R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        }
      }
    ],
    "since": "v0.3.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> [b]) -> [a] -> [b]"
      }
    ],
    "meta": {
      "lineno": 6796,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 193
  },
  {
    "id": "R.dropRepeatsWith",
    "longname": "R.dropRepeatsWith",
    "name": "dropRepeatsWith",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list without any consecutively repeating elements. Equality is\ndetermined by applying the supplied predicate two consecutive elements. The\nfirst element in a series of equal element is the one being preserved.\n\nDispatches to the `dropRepeatsWith` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate used to test whether two items are equal.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];\n     R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "`list` without repeating elements."
      }
    ],
    "since": "v0.14.0",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a, a -> Boolean) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 6995,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 198
  },
  {
    "id": "R.groupBy",
    "longname": "R.groupBy",
    "name": "groupBy",
    "scope": "static",
    "kind": "function",
    "description": "Splits a list into sub-lists stored in an object, based on the result of\ncalling a String-returning function on each element, and grouping the\nresults according to values returned.\n\nDispatches to the `groupBy` method of the second argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "Function :: a -> String",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to group",
        "name": "list"
      }
    ],
    "examples": [
      "var byGrade = R.groupBy(function(student) {\n       var score = student.score;\n       return score < 65 ? 'F' :\n              score < 70 ? 'D' :\n              score < 80 ? 'C' :\n              score < 90 ? 'B' : 'A';\n     });\n     var students = [{name: 'Abby', score: 84},\n                     {name: 'Eddy', score: 58},\n                     // ...\n                     {name: 'Jack', score: 69}];\n     byGrade(students);\n     // {\n     //   'A': [{name: 'Dianne', score: 99}],\n     //   'B': [{name: 'Abby', score: 84}]\n     //   // ...,\n     //   'F': [{name: 'Eddy', score: 58}]\n     // }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "An object with the output of `fn` for keys, mapped to arrays of elements\n        that produced that key when passed to `fn`."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> String) -> [a] -> {String: [a]}"
      }
    ],
    "meta": {
      "lineno": 7097,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 201
  },
  {
    "id": "R.indexBy",
    "longname": "R.indexBy",
    "name": "indexBy",
    "scope": "static",
    "kind": "function",
    "description": "Given a function that generates a key, turns a list of objects into an\nobject indexing the objects by the given key. Note that if multiple\nobjects generate the same value for the indexing key only the last value\nwill be included in the generated object.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "Function :: a -> String",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array of objects to index",
        "name": "array"
      }
    ],
    "examples": [
      "var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];\n     R.indexBy(R.prop('id'), list);\n     //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "An object indexing each array element by the given property."
      }
    ],
    "since": "v0.19.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> String) -> [{k: v}] -> {k: {k: v}}"
      }
    ],
    "meta": {
      "lineno": 7125,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 202
  },
  {
    "id": "R.indexOf",
    "longname": "R.indexOf",
    "name": "indexOf",
    "scope": "static",
    "kind": "function",
    "description": "Returns the position of the first occurrence of an item in an array, or -1\nif the item is not included in the array. `R.equals` is used to determine\nequality.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The item to find.",
        "name": "target"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to search in.",
        "name": "xs"
      }
    ],
    "examples": [
      "R.indexOf(3, [1,2,3,4]); //=> 2\n     R.indexOf(10, [1,2,3,4]); //=> -1"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "the index of the target, or -1 if the target is not found."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.lastIndexOf"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> [a] -> Number"
      }
    ],
    "meta": {
      "lineno": 7148,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 203
  },
  {
    "id": "R.partition",
    "longname": "R.partition",
    "name": "partition",
    "scope": "static",
    "kind": "function",
    "description": "Takes a predicate and a list or other \"filterable\" object and returns the\npair of filterable objects of the same type of elements which do and do not\nsatisfy, the predicate, respectively.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate to determine which side the element belongs to.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "the list (or other filterable) to partition.",
        "name": "filterable"
      }
    ],
    "examples": [
      "R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);\n     // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]\n\n     R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });\n     // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array, containing first the subset of elements that satisfy the\n        predicate, and second the subset of elements that do not satisfy."
      }
    ],
    "since": "v0.1.4",
    "category": "List",
    "see": [
      "R.filter, R.reject"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Filterable f => (a -> Boolean) -> f a -> [f a, f a]"
      }
    ],
    "meta": {
      "lineno": 7371,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 212
  },
  {
    "id": "R.sequence",
    "longname": "R.sequence",
    "name": "sequence",
    "scope": "static",
    "kind": "function",
    "description": "Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)\nof [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an\nApplicative of Traversable.\n\nDispatches to the `sequence` method of the second argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "of"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "traversable"
      }
    ],
    "examples": [
      "R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])\n     R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()\n\n     R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]\n     R.sequence(R.of, Nothing());       //=> [Nothing()]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.19.0",
    "category": "List",
    "see": [
      "R.traverse"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)"
      }
    ],
    "meta": {
      "lineno": 7471,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 216
  },
  {
    "id": "R.traverse",
    "longname": "R.traverse",
    "name": "traverse",
    "scope": "static",
    "kind": "function",
    "description": "Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning\nfunction over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),\nthen uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative\ninto an Applicative of Traversable.\n\nDispatches to the `sequence` method of the third argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "of"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "f"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "traversable"
      }
    ],
    "examples": [
      "// Returns `Nothing` if the given divisor is `0`\n     safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)\n\n     R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])\n     R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.19.0",
    "category": "List",
    "see": [
      "R.sequence"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)"
      }
    ],
    "meta": {
      "lineno": 7503,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 217
  },
  {
    "id": "R.unnest",
    "longname": "R.unnest",
    "name": "unnest",
    "scope": "static",
    "kind": "function",
    "description": "Shorthand for `R.chain(R.identity)`, which removes one level of nesting from\nany [Chain](https://github.com/fantasyland/fantasy-land#chain).",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]\n     R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.3.0",
    "category": "List",
    "see": [
      "R.flatten, R.chain"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Chain c => c (c a) -> c a"
      }
    ],
    "meta": {
      "lineno": 7524,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 218
  },
  {
    "id": "R.contains",
    "longname": "R.contains",
    "name": "contains",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the specified value is equal, in `R.equals` terms, to at\nleast one element of the given list; `false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The item to compare against.",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "R.contains(3, [1, 2, 3]); //=> true\n     R.contains(4, [1, 2, 3]); //=> false\n     R.contains([42], [[42]]); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if the item is in the list, `false` otherwise."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.any"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> [a] -> Boolean"
      }
    ],
    "meta": {
      "lineno": 7709,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 223
  },
  {
    "id": "R.dropRepeats",
    "longname": "R.dropRepeats",
    "name": "dropRepeats",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list without any consecutively repeating elements. `R.equals`\nis used to determine equality.\n\nDispatches to the `dropRepeats` method of the first argument, if present.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "`list` without repeating elements."
      }
    ],
    "since": "v0.14.0",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 7762,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 225
  },
  {
    "id": "R.without",
    "longname": "R.without",
    "name": "without",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list without values in the first argument.\n`R.equals` is used to determine equality.\n\nActs as a transducer if a transformer is given in list position.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The values to be removed from `list2`.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to remove values from.",
        "name": "list2"
      }
    ],
    "examples": [
      "R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The new array without values in `list1`."
      }
    ],
    "since": "v0.19.0",
    "category": "List",
    "see": [
      "R.transduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 7912,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 230
  },
  {
    "id": "R.join",
    "longname": "R.join",
    "name": "join",
    "scope": "static",
    "kind": "function",
    "description": "Returns a string made by inserting the `separator` between each element and\nconcatenating all the elements into a single string.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number",
            "String"
          ]
        },
        "description": "The string used to separate the elements.",
        "name": "separator"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The elements to join into a string.",
        "name": "xs"
      }
    ],
    "examples": [
      "var spacer = R.join(' ');\n     spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'\n     R.join('|', [1, 2, 3]);    //=> '1|2|3'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "str The string made by concatenating `xs` with `separator`."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "see": [
      "R.split"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "String -> [a] -> String"
      }
    ],
    "meta": {
      "lineno": 8244,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 237
  },
  {
    "id": "R.uniqBy",
    "longname": "R.uniqBy",
    "name": "uniqBy",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing only one copy of each element in the original\nlist, based upon the value returned by applying the supplied function to\neach list element. Prefers the first item if the supplied function produces\nthe same value on two items. `R.equals` is used for comparison.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function used to produce a value to use during comparisons.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list of unique items."
      }
    ],
    "since": "v0.16.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> b) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 8381,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 243
  },
  {
    "id": "R.concat",
    "longname": "R.concat",
    "name": "concat",
    "scope": "static",
    "kind": "function",
    "description": "Returns the result of concatenating the given lists or strings.\n\nDispatches to the `concat` method of the first argument, if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array",
            "String"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Array",
            "String"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.concat([], []); //=> []\n     R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]\n     R.concat('ABC', 'DEF'); // 'ABCDEF'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array",
            "String"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [a] -> [a]"
      },
      {
        "tag": "sig",
        "value": "String -> String -> String"
      }
    ],
    "meta": {
      "lineno": 8418,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 244
  },
  {
    "id": "R.uniq",
    "longname": "R.uniq",
    "name": "uniq",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new list containing only one copy of each element in the original\nlist. `R.equals` is used to determine equality.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array to consider.",
        "name": "list"
      }
    ],
    "examples": [
      "R.uniq([1, 1, 2, 1]); //=> [1, 2]\n     R.uniq([1, '1']);     //=> [1, '1']\n     R.uniq([[42], [42]]); //=> [[42]]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list of unique items."
      }
    ],
    "since": "v0.1.0",
    "category": "List",
    "customTags": [
      {
        "tag": "sig",
        "value": "[a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 8485,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 247
  },
  {
    "id": "R.and",
    "longname": "R.and",
    "name": "and",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if both arguments are `true`; `false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "A boolean value",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "A boolean value",
        "name": "b"
      }
    ],
    "examples": [
      "R.and(true, true); //=> true\n     R.and(true, false); //=> false\n     R.and(false, true); //=> false\n     R.and(false, false); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if both arguments are `true`, `false` otherwise"
      }
    ],
    "since": "v0.1.0",
    "category": "Logic",
    "see": [
      "R.both"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "* -> * -> *"
      }
    ],
    "meta": {
      "lineno": 1075,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 16
  },
  {
    "id": "R.defaultTo",
    "longname": "R.defaultTo",
    "name": "defaultTo",
    "scope": "static",
    "kind": "function",
    "description": "Returns the second argument if it is not `null`, `undefined` or `NaN`\notherwise the first argument is returned.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "a"
          ]
        },
        "description": "The default value.",
        "name": "val"
      },
      {
        "type": {
          "names": [
            "b"
          ]
        },
        "description": "The value to return if it is not null or undefined",
        "name": "val"
      }
    ],
    "examples": [
      "var defaultTo42 = R.defaultTo(42);\n\n     defaultTo42(null);  //=> 42\n     defaultTo42(undefined);  //=> 42\n     defaultTo42('Ramda');  //=> 'Ramda'\n     defaultTo42(parseInt('string')); //=> 42"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The the second value or the default value"
      }
    ],
    "since": "v0.10.0",
    "category": "Logic",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> b -> a | b"
      }
    ],
    "meta": {
      "lineno": 1408,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 28
  },
  {
    "id": "R.ifElse",
    "longname": "R.ifElse",
    "name": "ifElse",
    "scope": "static",
    "kind": "function",
    "description": "Creates a function that will process either the `onTrue` or the `onFalse`\nfunction depending upon the result of the `condition` predicate.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate function",
        "name": "condition"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function to invoke when the `condition` evaluates to a truthy value.",
        "name": "onTrue"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function to invoke when the `condition` evaluates to a falsy value.",
        "name": "onFalse"
      }
    ],
    "examples": [
      "var incCount = R.ifElse(\n       R.has('count'),\n       R.over(R.lensProp('count'), R.inc),\n       R.assoc('count', 1)\n     );\n     incCount({});           //=> { count: 1 }\n     incCount({ count: 1 }); //=> { count: 2 }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A new unary function that will process either the `onTrue` or the `onFalse`\n                   function depending upon the result of the `condition` predicate."
      }
    ],
    "since": "v0.8.0",
    "category": "Logic",
    "see": [
      "R.unless, R.when"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)"
      }
    ],
    "meta": {
      "lineno": 2074,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 49
  },
  {
    "id": "R.not",
    "longname": "R.not",
    "name": "not",
    "scope": "static",
    "kind": "function",
    "description": "A function that returns the `!` of its argument. It will return `true` when\npassed false-y value, and `false` when passed a truth-y one.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "any value",
        "name": "a"
      }
    ],
    "examples": [
      "R.not(true); //=> false\n     R.not(false); //=> true\n     R.not(0); => true\n     R.not(1); => false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "the logical inverse of passed argument."
      }
    ],
    "since": "v0.1.0",
    "category": "Logic",
    "see": [
      "R.complement"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "* -> Boolean"
      }
    ],
    "meta": {
      "lineno": 2971,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 78
  },
  {
    "id": "R.or",
    "longname": "R.or",
    "name": "or",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if one or both of its arguments are `true`. Returns `false`\nif both arguments are `false`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "A boolean value",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "A boolean value",
        "name": "b"
      }
    ],
    "examples": [
      "R.or(true, true); //=> true\n     R.or(true, false); //=> true\n     R.or(false, true); //=> true\n     R.or(false, false); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if one or both arguments are `true`, `false` otherwise"
      }
    ],
    "since": "v0.1.0",
    "category": "Logic",
    "see": [
      "R.either"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "* -> * -> *"
      }
    ],
    "meta": {
      "lineno": 3122,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 84
  },
  {
    "id": "R.pathSatisfies",
    "longname": "R.pathSatisfies",
    "name": "pathSatisfies",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the specified object property at given path satisfies the\ngiven predicate; `false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "propPath"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "obj"
      }
    ],
    "examples": [
      "R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.19.0",
    "category": "Logic",
    "see": [
      "R.propSatisfies, R.path"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> [String] -> Object -> Boolean"
      }
    ],
    "meta": {
      "lineno": 3266,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 89
  },
  {
    "id": "R.propSatisfies",
    "longname": "R.propSatisfies",
    "name": "propSatisfies",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the specified object property satisfies the given\npredicate; `false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "name"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "obj"
      }
    ],
    "examples": [
      "R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "Logic",
    "see": [
      "R.propEq, R.propIs"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> String -> {String: a} -> Boolean"
      }
    ],
    "meta": {
      "lineno": 3450,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 96
  },
  {
    "id": "R.unless",
    "longname": "R.unless",
    "name": "unless",
    "scope": "static",
    "kind": "function",
    "description": "Tests the final argument by passing it to the given predicate function. If\nthe predicate is not satisfied, the function will return the result of\ncalling the `whenFalseFn` function with the same argument. If the predicate\nis satisfied, the argument is returned as is.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate function",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function to invoke when the `pred` evaluates\n                              to a falsy value.",
        "name": "whenFalseFn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "An object to test with the `pred` function and\n                              pass to `whenFalseFn` if necessary.",
        "name": "x"
      }
    ],
    "examples": [
      "// coerceArray :: (a|[a]) -> [a]\n     var coerceArray = R.unless(R.isArrayLike, R.of);\n     coerceArray([1, 2, 3]); //=> [1, 2, 3]\n     coerceArray(1);         //=> [1]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "Either `x` or the result of applying `x` to `whenFalseFn`."
      }
    ],
    "since": "v0.18.0",
    "category": "Logic",
    "see": [
      "R.ifElse, R.when"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> (a -> a) -> a -> a"
      }
    ],
    "meta": {
      "lineno": 4495,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 130
  },
  {
    "id": "R.until",
    "longname": "R.until",
    "name": "until",
    "scope": "static",
    "kind": "function",
    "description": "Takes a predicate, a transformation function, and an initial value,\nand returns a value of the same type as the initial value.\nIt does so by applying the transformation until the predicate is satisfied,\nat which point it returns the satisfactory value.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate function",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The iterator function",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "Initial value",
        "name": "init"
      }
    ],
    "examples": [
      "R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "Final value that satisfies predicate"
      }
    ],
    "since": "v0.20.0",
    "category": "Logic",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> (a -> a) -> a -> a"
      }
    ],
    "meta": {
      "lineno": 4518,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 131
  },
  {
    "id": "R.when",
    "longname": "R.when",
    "name": "when",
    "scope": "static",
    "kind": "function",
    "description": "Tests the final argument by passing it to the given predicate function. If\nthe predicate is satisfied, the function will return the result of calling\nthe `whenTrueFn` function with the same argument. If the predicate is not\nsatisfied, the argument is returned as is.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate function",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A function to invoke when the `condition`\n                             evaluates to a truthy value.",
        "name": "whenTrueFn"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "An object to test with the `pred` function and\n                             pass to `whenTrueFn` if necessary.",
        "name": "x"
      }
    ],
    "examples": [
      "// truncate :: String -> String\n     var truncate = R.when(\n       R.propSatisfies(R.gt(R.__, 10), 'length'),\n       R.pipe(R.take(10), R.append('…'), R.join(''))\n     );\n     truncate('12345');         //=> '12345'\n     truncate('0123456789ABC'); //=> '0123456789…'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "Either `x` or the result of applying `x` to `whenTrueFn`."
      }
    ],
    "since": "v0.18.0",
    "category": "Logic",
    "see": [
      "R.ifElse, R.unless"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> Boolean) -> (a -> a) -> a -> a"
      }
    ],
    "meta": {
      "lineno": 4714,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 137
  },
  {
    "id": "R.isEmpty",
    "longname": "R.isEmpty",
    "name": "isEmpty",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the given value is its type's empty value; `false`\notherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "x"
      }
    ],
    "examples": [
      "R.isEmpty([1, 2, 3]);   //=> false\n     R.isEmpty([]);          //=> true\n     R.isEmpty('');          //=> true\n     R.isEmpty(null);        //=> false\n     R.isEmpty({});          //=> true\n     R.isEmpty({length: 0}); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Logic",
    "see": [
      "R.empty"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> Boolean"
      }
    ],
    "meta": {
      "lineno": 5855,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 165
  },
  {
    "id": "R.allPass",
    "longname": "R.allPass",
    "name": "allPass",
    "scope": "static",
    "kind": "function",
    "description": "Takes a list of predicates and returns a predicate that returns true for a\ngiven list of arguments if every one of the provided predicates is satisfied\nby those arguments.\n\nThe function returned is a curried function whose arity matches that of the\nhighest-arity predicate.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "preds"
      }
    ],
    "examples": [
      "var isQueen = R.propEq('rank', 'Q');\n     var isSpade = R.propEq('suit', '♠︎');\n     var isQueenOfSpades = R.allPass([isQueen, isSpade]);\n\n     isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false\n     isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Logic",
    "see": [
      "R.anyPass"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[(*... -> Boolean)] -> (*... -> Boolean)"
      }
    ],
    "meta": {
      "lineno": 6599,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 187
  },
  {
    "id": "R.anyPass",
    "longname": "R.anyPass",
    "name": "anyPass",
    "scope": "static",
    "kind": "function",
    "description": "Takes a list of predicates and returns a predicate that returns true for a\ngiven list of arguments if at least one of the provided predicates is\nsatisfied by those arguments.\n\nThe function returned is a curried function whose arity matches that of the\nhighest-arity predicate.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "preds"
      }
    ],
    "examples": [
      "var gte = R.anyPass([R.gt, R.equals]);\n\n     gte(3, 2); //=> true\n     gte(2, 2); //=> true\n     gte(2, 3); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Logic",
    "see": [
      "R.allPass"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[(*... -> Boolean)] -> (*... -> Boolean)"
      }
    ],
    "meta": {
      "lineno": 6667,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 189
  },
  {
    "id": "R.cond",
    "longname": "R.cond",
    "name": "cond",
    "scope": "static",
    "kind": "function",
    "description": "Returns a function, `fn`, which encapsulates if/else-if/else logic.\n`R.cond` takes a list of [predicate, transform] pairs. All of the arguments\nto `fn` are applied to each of the predicates in turn until one returns a\n\"truthy\" value, at which point `fn` returns the result of applying its\narguments to the corresponding transformer. If none of the predicates\nmatches, `fn` returns undefined.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "pairs"
      }
    ],
    "examples": [
      "var fn = R.cond([\n       [R.equals(0),   R.always('water freezes at 0°C')],\n       [R.equals(100), R.always('water boils at 100°C')],\n       [R.T,           temp => 'nothing special happens at ' + temp + '°C']\n     ]);\n     fn(0); //=> 'water freezes at 0°C'\n     fn(50); //=> 'nothing special happens at 50°C'\n     fn(100); //=> 'water boils at 100°C'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.6.0",
    "category": "Logic",
    "customTags": [
      {
        "tag": "sig",
        "value": "[[(*... -> Boolean),(*... -> *)]] -> (*... -> *)"
      }
    ],
    "meta": {
      "lineno": 6831,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 194
  },
  {
    "id": "R.both",
    "longname": "R.both",
    "name": "both",
    "scope": "static",
    "kind": "function",
    "description": "A function wrapping calls to the two functions in an `&&` operation,\nreturning the result of the first function if it is false-y and the result\nof the second function otherwise. Note that this is short-circuited,\nmeaning that the second function will not be invoked if the first returns a\nfalse-y value.\n\nIn addition to functions, `R.both` also accepts any fantasy-land compatible\napplicative functor.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "a predicate",
        "name": "f"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "another predicate",
        "name": "g"
      }
    ],
    "examples": [
      "var gt10 = x => x > 10;\n     var even = x => x % 2 === 0;\n     var f = R.both(gt10, even);\n     f(100); //=> true\n     f(101); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "a function that applies its arguments to `f` and `g` and `&&`s their outputs together."
      }
    ],
    "since": "v0.12.0",
    "category": "Logic",
    "see": [
      "R.and"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)"
      }
    ],
    "meta": {
      "lineno": 8125,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 233
  },
  {
    "id": "R.complement",
    "longname": "R.complement",
    "name": "complement",
    "scope": "static",
    "kind": "function",
    "description": "Takes a function `f` and returns a function `g` such that:\n\n  - applying `g` to zero or more arguments will give __true__ if applying\n    the same arguments to `f` gives a logical __false__ value; and\n\n  - applying `g` to zero or more arguments will give __false__ if applying\n    the same arguments to `f` gives a logical __true__ value.\n\n`R.complement` will work on all other functors as well.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "f"
      }
    ],
    "examples": [
      "var isEven = n => n % 2 === 0;\n     var isOdd = R.complement(isEven);\n     isOdd(21); //=> true\n     isOdd(42); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        }
      }
    ],
    "since": "v0.12.0",
    "category": "Logic",
    "see": [
      "R.not"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(*... -> *) -> (*... -> Boolean)"
      }
    ],
    "meta": {
      "lineno": 8157,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 234
  },
  {
    "id": "R.either",
    "longname": "R.either",
    "name": "either",
    "scope": "static",
    "kind": "function",
    "description": "A function wrapping calls to the two functions in an `||` operation,\nreturning the result of the first function if it is truth-y and the result\nof the second function otherwise. Note that this is short-circuited,\nmeaning that the second function will not be invoked if the first returns a\ntruth-y value.\n\nIn addition to functions, `R.either` also accepts any fantasy-land compatible\napplicative functor.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "a predicate",
        "name": "f"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "another predicate",
        "name": "g"
      }
    ],
    "examples": [
      "var gt10 = x => x > 10;\n     var even = x => x % 2 === 0;\n     var f = R.either(gt10, even);\n     f(101); //=> true\n     f(8); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "a function that applies its arguments to `f` and `g` and `||`s their outputs together."
      }
    ],
    "since": "v0.12.0",
    "category": "Logic",
    "see": [
      "R.or"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)"
      }
    ],
    "meta": {
      "lineno": 8186,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 235
  },
  {
    "id": "R.add",
    "longname": "R.add",
    "name": "add",
    "scope": "static",
    "kind": "function",
    "description": "Adds two values.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.add(2, 3);       //=>  5\n     R.add(7)(10);      //=> 17"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Math",
    "see": [
      "R.subtract"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> Number"
      }
    ],
    "meta": {
      "lineno": 957,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 12
  },
  {
    "id": "R.dec",
    "longname": "R.dec",
    "name": "dec",
    "scope": "static",
    "kind": "function",
    "description": "Decrements its argument.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "n"
      }
    ],
    "examples": [
      "R.dec(42); //=> 41"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Math",
    "see": [
      "R.inc"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number"
      }
    ],
    "meta": {
      "lineno": 1385,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 27
  },
  {
    "id": "R.divide",
    "longname": "R.divide",
    "name": "divide",
    "scope": "static",
    "kind": "function",
    "description": "Divides two numbers. Equivalent to `a / b`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The first value.",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The second value.",
        "name": "b"
      }
    ],
    "examples": [
      "R.divide(71, 100); //=> 0.71\n\n     var half = R.divide(R.__, 2);\n     half(42); //=> 21\n\n     var reciprocal = R.divide(1);\n     reciprocal(4);   //=> 0.25"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The result of `a / b`."
      }
    ],
    "since": "v0.1.0",
    "category": "Math",
    "see": [
      "R.multiply"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> Number"
      }
    ],
    "meta": {
      "lineno": 1526,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 32
  },
  {
    "id": "R.inc",
    "longname": "R.inc",
    "name": "inc",
    "scope": "static",
    "kind": "function",
    "description": "Increments its argument.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "n"
      }
    ],
    "examples": [
      "R.inc(42); //=> 43"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Math",
    "see": [
      "R.dec"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number"
      }
    ],
    "meta": {
      "lineno": 2095,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 50
  },
  {
    "id": "R.mathMod",
    "longname": "R.mathMod",
    "name": "mathMod",
    "scope": "static",
    "kind": "function",
    "description": "mathMod behaves like the modulo operator should mathematically, unlike the\n`%` operator (and by extension, R.modulo). So while \"-17 % 5\" is -2,\nmathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN\nwhen the modulus is zero or negative.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The dividend.",
        "name": "m"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "the modulus.",
        "name": "p"
      }
    ],
    "examples": [
      "R.mathMod(-17, 5);  //=> 3\n     R.mathMod(17, 5);   //=> 2\n     R.mathMod(17, -5);  //=> NaN\n     R.mathMod(17, 0);   //=> NaN\n     R.mathMod(17.2, 5); //=> NaN\n     R.mathMod(17, 5.3); //=> NaN\n\n     var clock = R.mathMod(R.__, 12);\n     clock(15); //=> 3\n     clock(24); //=> 0\n\n     var seventeenMod = R.mathMod(17);\n     seventeenMod(3);  //=> 2\n     seventeenMod(4);  //=> 1\n     seventeenMod(10); //=> 7"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The result of `b mod a`."
      }
    ],
    "since": "v0.3.0",
    "category": "Math",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> Number"
      }
    ],
    "meta": {
      "lineno": 2584,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 65
  },
  {
    "id": "R.modulo",
    "longname": "R.modulo",
    "name": "modulo",
    "scope": "static",
    "kind": "function",
    "description": "Divides the second parameter by the first and returns the remainder. Note\nthat this function preserves the JavaScript-style behavior for modulo. For\nmathematical modulo see `mathMod`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The value to the divide.",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The pseudo-modulus",
        "name": "b"
      }
    ],
    "examples": [
      "R.modulo(17, 3); //=> 2\n     // JS behavior:\n     R.modulo(-17, 3); //=> -2\n     R.modulo(17, -3); //=> 2\n\n     var isOdd = R.modulo(R.__, 2);\n     isOdd(42); //=> 0\n     isOdd(21); //=> 1"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The result of `b % a`."
      }
    ],
    "since": "v0.1.1",
    "category": "Math",
    "see": [
      "R.mathMod"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> Number"
      }
    ],
    "meta": {
      "lineno": 2805,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 73
  },
  {
    "id": "R.multiply",
    "longname": "R.multiply",
    "name": "multiply",
    "scope": "static",
    "kind": "function",
    "description": "Multiplies two numbers. Equivalent to `a * b` but curried.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The first value.",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The second value.",
        "name": "b"
      }
    ],
    "examples": [
      "var double = R.multiply(2);\n     var triple = R.multiply(3);\n     double(3);       //=>  6\n     triple(4);       //=> 12\n     R.multiply(2, 5);  //=> 10"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The result of `a * b`."
      }
    ],
    "since": "v0.1.0",
    "category": "Math",
    "see": [
      "R.divide"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> Number"
      }
    ],
    "meta": {
      "lineno": 2829,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 74
  },
  {
    "id": "R.negate",
    "longname": "R.negate",
    "name": "negate",
    "scope": "static",
    "kind": "function",
    "description": "Negates its argument.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "n"
      }
    ],
    "examples": [
      "R.negate(42); //=> -42"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Math",
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number"
      }
    ],
    "meta": {
      "lineno": 2924,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 76
  },
  {
    "id": "R.subtract",
    "longname": "R.subtract",
    "name": "subtract",
    "scope": "static",
    "kind": "function",
    "description": "Subtracts its second argument from its first argument.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The first value.",
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The second value.",
        "name": "b"
      }
    ],
    "examples": [
      "R.subtract(10, 8); //=> 2\n\n     var minus5 = R.subtract(R.__, 5);\n     minus5(17); //=> 12\n\n     var complementaryAngle = R.subtract(90);\n     complementaryAngle(30); //=> 60\n     complementaryAngle(72); //=> 18"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The result of `a - b`."
      }
    ],
    "since": "v0.1.0",
    "category": "Math",
    "see": [
      "R.add"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Number -> Number -> Number"
      }
    ],
    "meta": {
      "lineno": 3915,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 112
  },
  {
    "id": "R.sum",
    "longname": "R.sum",
    "name": "sum",
    "scope": "static",
    "kind": "function",
    "description": "Adds together all the elements of a list.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of numbers",
        "name": "list"
      }
    ],
    "examples": [
      "R.sum([2,4,6,8,100,1]); //=> 121"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The sum of all the numbers in the list."
      }
    ],
    "since": "v0.1.0",
    "category": "Math",
    "see": [
      "R.reduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[Number] -> Number"
      }
    ],
    "meta": {
      "lineno": 6350,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 182
  },
  {
    "id": "R.mean",
    "longname": "R.mean",
    "name": "mean",
    "scope": "static",
    "kind": "function",
    "description": "Returns the mean of the given list of numbers.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.mean([2, 7, 9]); //=> 6\n     R.mean([]); //=> NaN"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        }
      }
    ],
    "since": "v0.14.0",
    "category": "Math",
    "customTags": [
      {
        "tag": "sig",
        "value": "[Number] -> Number"
      }
    ],
    "meta": {
      "lineno": 7316,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 210
  },
  {
    "id": "R.median",
    "longname": "R.median",
    "name": "median",
    "scope": "static",
    "kind": "function",
    "description": "Returns the median of the given list of numbers.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "name": "list"
      }
    ],
    "examples": [
      "R.median([2, 9, 7]); //=> 7\n     R.median([7, 2, 10, 9]); //=> 8\n     R.median([]); //=> NaN"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        }
      }
    ],
    "since": "v0.14.0",
    "category": "Math",
    "customTags": [
      {
        "tag": "sig",
        "value": "[Number] -> Number"
      }
    ],
    "meta": {
      "lineno": 7336,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 211
  },
  {
    "id": "R.product",
    "longname": "R.product",
    "name": "product",
    "scope": "static",
    "kind": "function",
    "description": "Multiplies together all the elements of a list.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of numbers",
        "name": "list"
      }
    ],
    "examples": [
      "R.product([2,4,6,8,100,1]); //=> 38400"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "The product of all the numbers in the list."
      }
    ],
    "since": "v0.1.0",
    "category": "Math",
    "see": [
      "R.reduce"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[Number] -> Number"
      }
    ],
    "meta": {
      "lineno": 7445,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 215
  },
  {
    "id": "R.assoc",
    "longname": "R.assoc",
    "name": "assoc",
    "scope": "static",
    "kind": "function",
    "description": "Makes a shallow clone of an object, setting or overriding the specified\nproperty with the given value. Note that this copies and flattens prototype\nproperties onto the new object as well. All non-primitive properties are\ncopied by reference.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "the property name to set",
        "name": "prop"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "the new value",
        "name": "val"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "the object to clone",
        "name": "obj"
      }
    ],
    "examples": [
      "R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "a new object similar to the original except for the specified property."
      }
    ],
    "since": "v0.8.0",
    "category": "Object",
    "see": [
      "R.dissoc"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "String -> a -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 1207,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 21
  },
  {
    "id": "R.assocPath",
    "longname": "R.assocPath",
    "name": "assocPath",
    "scope": "static",
    "kind": "function",
    "description": "Makes a shallow clone of an object, setting or overriding the nodes required\nto create the given path, and placing the specific value at the tail end of\nthat path. Note that this copies and flattens prototype properties onto the\nnew object as well. All non-primitive properties are copied by reference.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "the path to set",
        "name": "path"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "the new value",
        "name": "val"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "the object to clone",
        "name": "obj"
      }
    ],
    "examples": [
      "R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "a new object similar to the original except along the specified path."
      }
    ],
    "since": "v0.8.0",
    "category": "Object",
    "see": [
      "R.dissocPath"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[String] -> a -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 1236,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 22
  },
  {
    "id": "R.dissoc",
    "longname": "R.dissoc",
    "name": "dissoc",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new object that does not contain a `prop` property.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "the name of the property to dissociate",
        "name": "prop"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "the object to clone",
        "name": "obj"
      }
    ],
    "examples": [
      "R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "a new object similar to the original but without the specified property"
      }
    ],
    "since": "v0.10.0",
    "category": "Object",
    "see": [
      "R.assoc"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "String -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 1463,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 30
  },
  {
    "id": "R.dissocPath",
    "longname": "R.dissocPath",
    "name": "dissocPath",
    "scope": "static",
    "kind": "function",
    "description": "Makes a shallow clone of an object, omitting the property at the given path.\nNote that this copies and flattens prototype properties onto the new object\nas well. All non-primitive properties are copied by reference.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "the path to set",
        "name": "path"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "the object to clone",
        "name": "obj"
      }
    ],
    "examples": [
      "R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "a new object without the property at path"
      }
    ],
    "since": "v0.11.0",
    "category": "Object",
    "see": [
      "R.assocPath"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[String] -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 1491,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 31
  },
  {
    "id": "R.evolve",
    "longname": "R.evolve",
    "name": "evolve",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new object by recursively evolving a shallow copy of `object`,\naccording to the `transformation` functions. All non-primitive properties\nare copied by reference.\n\nA `transformation` function will not be invoked if its corresponding key\ndoes not exist in the evolved object.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object specifying transformation functions to apply\n       to the object.",
        "name": "transformations"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to be transformed.",
        "name": "object"
      }
    ],
    "examples": [
      "var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};\n     var transformations = {\n       firstName: R.trim,\n       lastName: R.trim, // Will not get invoked.\n       data: {elapsed: R.add(1), remaining: R.add(-1)}\n     };\n     R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The transformed object."
      }
    ],
    "since": "v0.9.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{k: (v -> v)} -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 1621,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 35
  },
  {
    "id": "R.has",
    "longname": "R.has",
    "name": "has",
    "scope": "static",
    "kind": "function",
    "description": "Returns whether or not an object has an own property with the specified name",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The name of the property to check for.",
        "name": "prop"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to query.",
        "name": "obj"
      }
    ],
    "examples": [
      "var hasName = R.has('name');\n     hasName({name: 'alice'});   //=> true\n     hasName({name: 'bob'});     //=> true\n     hasName({});                //=> false\n\n     var point = {x: 0, y: 0};\n     var pointHas = R.has(R.__, point);\n     pointHas('x');  //=> true\n     pointHas('y');  //=> true\n     pointHas('z');  //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "Whether the property exists."
      }
    ],
    "since": "v0.7.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "s -> {s: x} -> Boolean"
      }
    ],
    "meta": {
      "lineno": 1958,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 45
  },
  {
    "id": "R.hasIn",
    "longname": "R.hasIn",
    "name": "hasIn",
    "scope": "static",
    "kind": "function",
    "description": "Returns whether or not an object or its prototype chain has a property with\nthe specified name",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The name of the property to check for.",
        "name": "prop"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to query.",
        "name": "obj"
      }
    ],
    "examples": [
      "function Rectangle(width, height) {\n       this.width = width;\n       this.height = height;\n     }\n     Rectangle.prototype.area = function() {\n       return this.width * this.height;\n     };\n\n     var square = new Rectangle(2, 2);\n     R.hasIn('width', square);  //=> true\n     R.hasIn('area', square);  //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "Whether the property exists."
      }
    ],
    "since": "v0.7.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "s -> {s: x} -> Boolean"
      }
    ],
    "meta": {
      "lineno": 1986,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 46
  },
  {
    "id": "R.keys",
    "longname": "R.keys",
    "name": "keys",
    "scope": "static",
    "kind": "function",
    "description": "Returns a list containing the names of all the enumerable own properties of\nthe supplied object.\nNote that the order of the output array is not guaranteed to be consistent\nacross different JS platforms.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to extract properties from",
        "name": "obj"
      }
    ],
    "examples": [
      "R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of the object's own properties."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{k: v} -> [k]"
      }
    ],
    "meta": {
      "lineno": 2288,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 57
  },
  {
    "id": "R.keysIn",
    "longname": "R.keysIn",
    "name": "keysIn",
    "scope": "static",
    "kind": "function",
    "description": "Returns a list containing the names of all the properties of the supplied\nobject, including prototype properties.\nNote that the order of the output array is not guaranteed to be consistent\nacross different JS platforms.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to extract properties from",
        "name": "obj"
      }
    ],
    "examples": [
      "var F = function() { this.x = 'X'; };\n     F.prototype.y = 'Y';\n     var f = new F();\n     R.keysIn(f); //=> ['x', 'y']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of the object's own and prototype properties."
      }
    ],
    "since": "v0.2.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{k: v} -> [k]"
      }
    ],
    "meta": {
      "lineno": 2363,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 58
  },
  {
    "id": "R.merge",
    "longname": "R.merge",
    "name": "merge",
    "scope": "static",
    "kind": "function",
    "description": "Create a new object with the own properties of the first object merged with\nthe own properties of the second object. If a key exists in both objects,\nthe value from the second object will be used.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "l"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "r"
      }
    ],
    "examples": [
      "R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });\n     //=> { 'name': 'fred', 'age': 40 }\n\n     var resetToDefault = R.merge(R.__, {x: 0});\n     resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "see": [
      "R.mergeWith, R.mergeWithKey"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "{k: v} -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 2665,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 68
  },
  {
    "id": "R.mergeWithKey",
    "longname": "R.mergeWithKey",
    "name": "mergeWithKey",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new object with the own properties of the two provided objects. If\na key exists in both objects, the provided function is applied to the key\nand the values associated with the key in each object, with the result being\nused as the value associated with the key in the returned object. The key\nwill be excluded from the returned object if the resulting value is\n`undefined`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "l"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "r"
      }
    ],
    "examples": [
      "let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r\n     R.mergeWithKey(concatValues,\n                    { a: true, thing: 'foo', values: [10, 20] },\n                    { b: true, thing: 'bar', values: [15, 35] });\n     //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "since": "v0.19.0",
    "category": "Object",
    "see": [
      "R.merge, R.mergeWith"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(String -> a -> a -> a) -> {a} -> {a} -> {a}"
      }
    ],
    "meta": {
      "lineno": 2715,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 70
  },
  {
    "id": "R.objOf",
    "longname": "R.objOf",
    "name": "objOf",
    "scope": "static",
    "kind": "function",
    "description": "Creates an object containing a single key:value pair.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "key"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "val"
      }
    ],
    "examples": [
      "var matchPhrases = R.compose(\n       R.objOf('must'),\n       R.map(R.objOf('match_phrase'))\n     );\n     matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "since": "v0.18.0",
    "category": "Object",
    "see": [
      "R.pair"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "String -> a -> {String:a}"
      }
    ],
    "meta": {
      "lineno": 3044,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 81
  },
  {
    "id": "R.over",
    "longname": "R.over",
    "name": "over",
    "scope": "static",
    "kind": "function",
    "description": "Returns the result of \"setting\" the portion of the given data structure\nfocused by the given lens to the result of applying the given function to\nthe focused value.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Lens"
          ]
        },
        "name": "lens"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "v"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "x"
      }
    ],
    "examples": [
      "var headLens = R.lensIndex(0);\n\n     R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "Object",
    "see": [
      "R.prop, R.lensIndex, R.lensProp"
    ],
    "customTags": [
      {
        "tag": "typedefn",
        "value": "Lens s a = Functor f => (a -> f a) -> s -> f s"
      },
      {
        "tag": "sig",
        "value": "Lens s a -> (a -> a) -> s -> s"
      }
    ],
    "meta": {
      "lineno": 3153,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 85
  },
  {
    "id": "R.path",
    "longname": "R.path",
    "name": "path",
    "scope": "static",
    "kind": "function",
    "description": "Retrieve the value at a given path.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The path to use.",
        "name": "path"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to retrieve the nested property from.",
        "name": "obj"
      }
    ],
    "examples": [
      "R.path(['a', 'b'], {a: {b: 2}}); //=> 2\n     R.path(['a', 'b'], {c: {b: 2}}); //=> undefined"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The data at `path`."
      }
    ],
    "since": "v0.2.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "[String] -> {k: v} -> v | Undefined"
      }
    ],
    "meta": {
      "lineno": 3213,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 87
  },
  {
    "id": "R.pathOr",
    "longname": "R.pathOr",
    "name": "pathOr",
    "scope": "static",
    "kind": "function",
    "description": "If the given, non-null object has a value at the given path, returns the\nvalue at that path. Otherwise returns the provided default value.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The default value.",
        "name": "d"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The path to use.",
        "name": "p"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to retrieve the nested property from.",
        "name": "obj"
      }
    ],
    "examples": [
      "R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2\n     R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> \"N/A\""
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The data at `path` of the supplied object or the default value."
      }
    ],
    "since": "v0.18.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> [String] -> Object -> a"
      }
    ],
    "meta": {
      "lineno": 3244,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 88
  },
  {
    "id": "R.pick",
    "longname": "R.pick",
    "name": "pick",
    "scope": "static",
    "kind": "function",
    "description": "Returns a partial copy of an object containing only the keys specified. If\nthe key does not exist, the property is ignored.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "an array of String property names to copy onto a new object",
        "name": "names"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to copy from",
        "name": "obj"
      }
    ],
    "examples": [
      "R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}\n     R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "A new object with only properties from `names` on it."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "see": [
      "R.omit, R.props"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[k] -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 3288,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 90
  },
  {
    "id": "R.pickAll",
    "longname": "R.pickAll",
    "name": "pickAll",
    "scope": "static",
    "kind": "function",
    "description": "Similar to `pick` except that this one includes a `key: undefined` pair for\nproperties that don't exist.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "an array of String property names to copy onto a new object",
        "name": "names"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to copy from",
        "name": "obj"
      }
    ],
    "examples": [
      "R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}\n     R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "A new object with only properties from `names` on it."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "see": [
      "R.pick"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[k] -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 3318,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 91
  },
  {
    "id": "R.pickBy",
    "longname": "R.pickBy",
    "name": "pickBy",
    "scope": "static",
    "kind": "function",
    "description": "Returns a partial copy of an object containing only the keys that satisfy\nthe supplied predicate.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate to determine whether or not a key\n       should be included on the output object.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to copy from",
        "name": "obj"
      }
    ],
    "examples": [
      "var isUpperCase = (val, key) => key.toUpperCase() === key;\n     R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "A new object with only properties that satisfy `pred`\n        on it."
      }
    ],
    "since": "v0.8.0",
    "category": "Object",
    "see": [
      "R.pick, R.filter"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(v, k -> Boolean) -> {k: v} -> {k: v}"
      }
    ],
    "meta": {
      "lineno": 3350,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 92
  },
  {
    "id": "R.prop",
    "longname": "R.prop",
    "name": "prop",
    "scope": "static",
    "kind": "function",
    "description": "Returns a function that when supplied an object returns the indicated\nproperty of that object, if it exists.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The property name",
        "name": "p"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to query",
        "name": "obj"
      }
    ],
    "examples": [
      "R.prop('x', {x: 100}); //=> 100\n     R.prop('x', {}); //=> undefined"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value at `obj.p`."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "s -> {s: a} -> a | Undefined"
      }
    ],
    "meta": {
      "lineno": 3398,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 94
  },
  {
    "id": "R.propOr",
    "longname": "R.propOr",
    "name": "propOr",
    "scope": "static",
    "kind": "function",
    "description": "If the given, non-null object has an own property with the specified name,\nreturns the value of that property. Otherwise returns the provided default\nvalue.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The default value.",
        "name": "val"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The name of the property to return.",
        "name": "p"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to query.",
        "name": "obj"
      }
    ],
    "examples": [
      "var alice = {\n       name: 'ALICE',\n       age: 101\n     };\n     var favorite = R.prop('favoriteLibrary');\n     var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');\n\n     favorite(alice);  //=> undefined\n     favoriteWithDefault(alice);  //=> 'Ramda'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value of given property of the supplied object or the default value."
      }
    ],
    "since": "v0.6.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> String -> Object -> a"
      }
    ],
    "meta": {
      "lineno": 3428,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 95
  },
  {
    "id": "R.props",
    "longname": "R.props",
    "name": "props",
    "scope": "static",
    "kind": "function",
    "description": "Acts as multiple `prop`: array of keys in, array of values out. Preserves\norder.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The property names to fetch",
        "name": "ps"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to query",
        "name": "obj"
      }
    ],
    "examples": [
      "R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]\n     R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]\n\n     var fullName = R.compose(R.join(' '), R.props(['first', 'last']));\n     fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The corresponding values or partially applied function."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "[k] -> {k: v} -> [v]"
      }
    ],
    "meta": {
      "lineno": 3474,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 97
  },
  {
    "id": "R.set",
    "longname": "R.set",
    "name": "set",
    "scope": "static",
    "kind": "function",
    "description": "Returns the result of \"setting\" the portion of the given data structure\nfocused by the given lens to the given value.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Lens"
          ]
        },
        "name": "lens"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "v"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "x"
      }
    ],
    "examples": [
      "var xLens = R.lensProp('x');\n\n     R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}\n     R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "Object",
    "see": [
      "R.prop, R.lensIndex, R.lensProp"
    ],
    "customTags": [
      {
        "tag": "typedefn",
        "value": "Lens s a = Functor f => (a -> f a) -> s -> f s"
      },
      {
        "tag": "sig",
        "value": "Lens s a -> a -> s -> s"
      }
    ],
    "meta": {
      "lineno": 3709,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 105
  },
  {
    "id": "R.toPairs",
    "longname": "R.toPairs",
    "name": "toPairs",
    "scope": "static",
    "kind": "function",
    "description": "Converts an object into an array of key, value arrays. Only the object's\nown properties are used.\nNote that the order of the output array is not guaranteed to be consistent\nacross different JS platforms.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to extract from",
        "name": "obj"
      }
    ],
    "examples": [
      "R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of key, value arrays from the object's own properties."
      }
    ],
    "since": "v0.4.0",
    "category": "Object",
    "see": [
      "R.fromPairs"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "{String: *} -> [[String,*]]"
      }
    ],
    "meta": {
      "lineno": 4130,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 119
  },
  {
    "id": "R.toPairsIn",
    "longname": "R.toPairsIn",
    "name": "toPairsIn",
    "scope": "static",
    "kind": "function",
    "description": "Converts an object into an array of key, value arrays. The object's own\nproperties and prototype properties are used. Note that the order of the\noutput array is not guaranteed to be consistent across different JS\nplatforms.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to extract from",
        "name": "obj"
      }
    ],
    "examples": [
      "var F = function() { this.x = 'X'; };\n     F.prototype.y = 'Y';\n     var f = new F();\n     R.toPairsIn(f); //=> [['x','X'], ['y','Y']]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of key, value arrays from the object's own\n        and prototype properties."
      }
    ],
    "since": "v0.4.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{String: *} -> [[String,*]]"
      }
    ],
    "meta": {
      "lineno": 4164,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 120
  },
  {
    "id": "R.values",
    "longname": "R.values",
    "name": "values",
    "scope": "static",
    "kind": "function",
    "description": "Returns a list of all the enumerable own properties of the supplied object.\nNote that the order of the output array is not guaranteed across different\nJS platforms.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to extract values from",
        "name": "obj"
      }
    ],
    "examples": [
      "R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of the values of the object's own properties."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{k: v} -> [v]"
      }
    ],
    "meta": {
      "lineno": 4604,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 134
  },
  {
    "id": "R.valuesIn",
    "longname": "R.valuesIn",
    "name": "valuesIn",
    "scope": "static",
    "kind": "function",
    "description": "Returns a list of all the properties, including prototype properties, of the\nsupplied object.\nNote that the order of the output array is not guaranteed to be consistent\nacross different JS platforms.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to extract values from",
        "name": "obj"
      }
    ],
    "examples": [
      "var F = function() { this.x = 'X'; };\n     F.prototype.y = 'Y';\n     var f = new F();\n     R.valuesIn(f); //=> ['X', 'Y']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of the values of the object's own and prototype properties."
      }
    ],
    "since": "v0.2.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{k: v} -> [v]"
      }
    ],
    "meta": {
      "lineno": 4636,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 135
  },
  {
    "id": "R.view",
    "longname": "R.view",
    "name": "view",
    "scope": "static",
    "kind": "function",
    "description": "Returns a \"view\" of the given data structure, determined by the given lens.\nThe lens's focus determines which portion of the data structure is visible.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Lens"
          ]
        },
        "name": "lens"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "x"
      }
    ],
    "examples": [
      "var xLens = R.lensProp('x');\n\n     R.view(xLens, {x: 1, y: 2});  //=> 1\n     R.view(xLens, {x: 4, y: 2});  //=> 4"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "Object",
    "see": [
      "R.prop, R.lensIndex, R.lensProp"
    ],
    "customTags": [
      {
        "tag": "typedefn",
        "value": "Lens s a = Functor f => (a -> f a) -> s -> f s"
      },
      {
        "tag": "sig",
        "value": "Lens s a -> s -> a"
      }
    ],
    "meta": {
      "lineno": 4669,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 136
  },
  {
    "id": "R.where",
    "longname": "R.where",
    "name": "where",
    "scope": "static",
    "kind": "function",
    "description": "Takes a spec object and a test object; returns true if the test satisfies\nthe spec. Each of the spec's own properties must be a predicate function.\nEach predicate is applied to the value of the corresponding property of the\ntest object. `where` returns true if all the predicates return true, false\notherwise.\n\n`where` is well suited to declaratively expressing constraints for other\nfunctions such as `filter` and `find`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "spec"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "testObj"
      }
    ],
    "examples": [
      "// pred :: Object -> Boolean\n     var pred = R.where({\n       a: R.equals('foo'),\n       b: R.complement(R.equals('bar')),\n       x: R.gt(_, 10),\n       y: R.lt(_, 20)\n     });\n\n     pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true\n     pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false\n     pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false\n     pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false\n     pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.1.1",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{String: (* -> Boolean)} -> {String: *} -> Boolean"
      }
    ],
    "meta": {
      "lineno": 4752,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 138
  },
  {
    "id": "R.clone",
    "longname": "R.clone",
    "name": "clone",
    "scope": "static",
    "kind": "function",
    "description": "Creates a deep copy of the value which may contain (nested) `Array`s and\n`Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are not\ncopied, but assigned by their reference.\n\nDispatches to a `clone` method if present.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The object or array to clone",
        "name": "value"
      }
    ],
    "examples": [
      "var objects = [{}, {}, {}];\n     var objectsClone = R.clone(objects);\n     objects[0] === objectsClone[0]; //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "A new object or array."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{*} -> {*}"
      }
    ],
    "meta": {
      "lineno": 5377,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 150
  },
  {
    "id": "R.invert",
    "longname": "R.invert",
    "name": "invert",
    "scope": "static",
    "kind": "function",
    "description": "Same as R.invertObj, however this accounts for objects with duplicate values\nby putting the values into an array.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object or array to invert",
        "name": "obj"
      }
    ],
    "examples": [
      "var raceResultsByFirstName = {\n       first: 'alice',\n       second: 'jake',\n       third: 'alice',\n     };\n     R.invert(raceResultsByFirstName);\n     //=> { 'alice': ['first', 'third'], 'jake':['second'] }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "out A new object with keys\nin an array."
      }
    ],
    "since": "v0.9.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{s: x} -> {x: [ s, ... ]}"
      }
    ],
    "meta": {
      "lineno": 5780,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 163
  },
  {
    "id": "R.invertObj",
    "longname": "R.invertObj",
    "name": "invertObj",
    "scope": "static",
    "kind": "function",
    "description": "Returns a new object with the keys of the given object as values, and the\nvalues of the given object, which are coerced to strings, as keys. Note\nthat the last key found is preferred when handling the same value.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object or array to invert",
        "name": "obj"
      }
    ],
    "examples": [
      "var raceResults = {\n       first: 'alice',\n       second: 'jake'\n     };\n     R.invertObj(raceResults);\n     //=> { 'alice': 'first', 'jake':'second' }\n\n     // Alternatively:\n     var raceResults = ['alice', 'jake'];\n     R.invertObj(raceResults);\n     //=> { 'alice': '0', 'jake':'1' }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "out A new object"
      }
    ],
    "since": "v0.9.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "{s: x} -> {x: s}"
      }
    ],
    "meta": {
      "lineno": 5821,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 164
  },
  {
    "id": "R.mapObjIndexed",
    "longname": "R.mapObjIndexed",
    "name": "mapObjIndexed",
    "scope": "static",
    "kind": "function",
    "description": "An Object-specific version of `map`. The function is applied to three\narguments: *(value, key, obj)*. If only the value is significant, use\n`map` instead.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "obj"
      }
    ],
    "examples": [
      "var values = { x: 1, y: 2, z: 3 };\n     var prependKeyAndDouble = (num, key, obj) => key + (num * 2);\n\n     R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "since": "v0.9.0",
    "category": "Object",
    "see": [
      "R.map"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "((*, String, Object) -> *) -> Object -> Object"
      }
    ],
    "meta": {
      "lineno": 5984,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 169
  },
  {
    "id": "R.mergeWith",
    "longname": "R.mergeWith",
    "name": "mergeWith",
    "scope": "static",
    "kind": "function",
    "description": "Creates a new object with the own properties of the two provided objects. If\na key exists in both objects, the provided function is applied to the values\nassociated with the key in each object, with the result being used as the\nvalue associated with the key in the returned object. The key will be\nexcluded from the returned object if the resulting value is `undefined`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "l"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "r"
      }
    ],
    "examples": [
      "R.mergeWith(R.concat,\n                 { a: true, values: [10, 20] },\n                 { b: true, values: [15, 35] });\n     //=> { a: true, b: true, values: [10, 20, 15, 35] }"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        }
      }
    ],
    "since": "v0.19.0",
    "category": "Object",
    "see": [
      "R.merge, R.mergeWithKey"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> a -> a) -> {a} -> {a} -> {a}"
      }
    ],
    "meta": {
      "lineno": 6015,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 170
  },
  {
    "id": "R.project",
    "longname": "R.project",
    "name": "project",
    "scope": "static",
    "kind": "function",
    "description": "Reasonable analog to SQL `select` statement.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The property names to project",
        "name": "props"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The objects to query",
        "name": "objs"
      }
    ],
    "examples": [
      "var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};\n     var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};\n     var kids = [abby, fred];\n     R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "An array of objects with just the `props` properties."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "[k] -> [{k: v}] -> [{k: v}]"
      }
    ],
    "meta": {
      "lineno": 6144,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 175
  },
  {
    "id": "R.whereEq",
    "longname": "R.whereEq",
    "name": "whereEq",
    "scope": "static",
    "kind": "function",
    "description": "Takes a spec object and a test object; returns true if the test satisfies\nthe spec, false otherwise. An object satisfies the spec if, for each of the\nspec's own properties, accessing that property of the object gives the same\nvalue (in `R.equals` terms) as accessing that property of the spec.\n\n`whereEq` is a specialization of [`where`](#where).",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "spec"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "testObj"
      }
    ],
    "examples": [
      "// pred :: Object -> Boolean\n     var pred = R.whereEq({a: 1, b: 2});\n\n     pred({a: 1});              //=> false\n     pred({a: 1, b: 2});        //=> true\n     pred({a: 1, b: 2, c: 3});  //=> true\n     pred({a: 1, b: 1});        //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.14.0",
    "category": "Object",
    "see": [
      "R.where"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "{String: *} -> {String: *} -> Boolean"
      }
    ],
    "meta": {
      "lineno": 6479,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 186
  },
  {
    "id": "R.eqProps",
    "longname": "R.eqProps",
    "name": "eqProps",
    "scope": "static",
    "kind": "function",
    "description": "Reports whether two objects have the same value, in `R.equals` terms, for\nthe specified property. Useful as a curried predicate.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The name of the property to compare",
        "name": "prop"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "obj1"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "name": "obj2"
      }
    ],
    "examples": [
      "var o1 = { a: 1, b: 2, c: 3, d: 4 };\n     var o2 = { a: 10, b: 20, c: 3, d: 40 };\n     R.eqProps('a', o1, o2); //=> false\n     R.eqProps('c', o1, o2); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "customTags": [
      {
        "tag": "sig",
        "value": "k -> {k: v} -> {k: v} -> Boolean"
      }
    ],
    "meta": {
      "lineno": 7053,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 200
  },
  {
    "id": "R.lens",
    "longname": "R.lens",
    "name": "lens",
    "scope": "static",
    "kind": "function",
    "description": "Returns a lens for the given getter and setter functions. The getter \"gets\"\nthe value of the focus; the setter \"sets\" the value of the focus. The setter\nshould not mutate the data structure.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "getter"
      },
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "setter"
      }
    ],
    "examples": [
      "var xLens = R.lens(R.prop('x'), R.assoc('x'));\n\n     R.view(xLens, {x: 1, y: 2});            //=> 1\n     R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}\n     R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Lens"
          ]
        }
      }
    ],
    "since": "v0.8.0",
    "category": "Object",
    "see": [
      "R.view, R.set, R.over, R.lensIndex, R.lensProp"
    ],
    "customTags": [
      {
        "tag": "typedefn",
        "value": "Lens s a = Functor f => (a -> f a) -> s -> f s"
      },
      {
        "tag": "sig",
        "value": "(s -> a) -> ((a, s) -> s) -> Lens s a"
      }
    ],
    "meta": {
      "lineno": 7195,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 205
  },
  {
    "id": "R.lensIndex",
    "longname": "R.lensIndex",
    "name": "lensIndex",
    "scope": "static",
    "kind": "function",
    "description": "Returns a lens whose focus is the specified index.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "n"
      }
    ],
    "examples": [
      "var headLens = R.lensIndex(0);\n\n     R.view(headLens, ['a', 'b', 'c']);            //=> 'a'\n     R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']\n     R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Lens"
          ]
        }
      }
    ],
    "since": "v0.14.0",
    "category": "Object",
    "see": [
      "R.view, R.set, R.over"
    ],
    "customTags": [
      {
        "tag": "typedefn",
        "value": "Lens s a = Functor f => (a -> f a) -> s -> f s"
      },
      {
        "tag": "sig",
        "value": "Number -> Lens s a"
      }
    ],
    "meta": {
      "lineno": 7225,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 206
  },
  {
    "id": "R.lensPath",
    "longname": "R.lensPath",
    "name": "lensPath",
    "scope": "static",
    "kind": "function",
    "description": "Returns a lens whose focus is the specified path.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The path to use.",
        "name": "path"
      }
    ],
    "examples": [
      "var xyLens = R.lensPath(['x', 'y']);\n\n     R.view(xyLens, {x: {y: 2, z: 3}});            //=> 2\n     R.set(xyLens, 4, {x: {y: 2, z: 3}});          //=> {x: {y: 4, z: 3}}\n     R.over(xyLens, R.negate, {x: {y: 2, z: 3}});  //=> {x: {y: -2, z: 3}}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Lens"
          ]
        }
      }
    ],
    "since": "v0.19.0",
    "category": "Object",
    "see": [
      "R.view, R.set, R.over"
    ],
    "customTags": [
      {
        "tag": "typedefn",
        "value": "Lens s a = Functor f => (a -> f a) -> s -> f s"
      },
      {
        "tag": "sig",
        "value": "[String] -> Lens s a"
      }
    ],
    "meta": {
      "lineno": 7249,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 207
  },
  {
    "id": "R.lensProp",
    "longname": "R.lensProp",
    "name": "lensProp",
    "scope": "static",
    "kind": "function",
    "description": "Returns a lens whose focus is the specified property.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "k"
      }
    ],
    "examples": [
      "var xLens = R.lensProp('x');\n\n     R.view(xLens, {x: 1, y: 2});            //=> 1\n     R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}\n     R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Lens"
          ]
        }
      }
    ],
    "since": "v0.14.0",
    "category": "Object",
    "see": [
      "R.view, R.set, R.over"
    ],
    "customTags": [
      {
        "tag": "typedefn",
        "value": "Lens s a = Functor f => (a -> f a) -> s -> f s"
      },
      {
        "tag": "sig",
        "value": "String -> Lens s a"
      }
    ],
    "meta": {
      "lineno": 7273,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 208
  },
  {
    "id": "R.omit",
    "longname": "R.omit",
    "name": "omit",
    "scope": "static",
    "kind": "function",
    "description": "Returns a partial copy of an object omitting the keys specified.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "an array of String property names to omit from the new object",
        "name": "names"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to copy from",
        "name": "obj"
      }
    ],
    "examples": [
      "R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "A new object with properties from `names` not on it."
      }
    ],
    "since": "v0.1.0",
    "category": "Object",
    "see": [
      "R.pick"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[String] -> {String: *} -> {String: *}"
      }
    ],
    "meta": {
      "lineno": 7806,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 227
  },
  {
    "id": "R.clamp",
    "longname": "R.clamp",
    "name": "clamp",
    "scope": "static",
    "kind": "function",
    "description": "Restricts a number to be within a range.\n\nAlso works for other ordered types such as Strings and Dates.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "number",
        "name": "minimum"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "number",
        "name": "maximum"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "to be clamped",
        "name": "value"
      }
    ],
    "examples": [
      "R.clamp(1, 10, -1) // => 1\n     R.clamp(1, 10, 11) // => 10\n     R.clamp(1, 10, 4)  // => 4"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "description": "Returns the clamped value"
      }
    ],
    "since": "v0.20.0",
    "category": "Relation",
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord a => a -> a -> a -> a"
      }
    ],
    "meta": {
      "lineno": 1289,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 24
  },
  {
    "id": "R.differenceWith",
    "longname": "R.differenceWith",
    "name": "differenceWith",
    "scope": "static",
    "kind": "function",
    "description": "Finds the set (i.e. no duplicates) of all elements in the first list not\ncontained in the second list. Duplication is determined according to the\nvalue returned by applying the supplied predicate to two list elements.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate used to test whether two items are equal.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first list.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second list.",
        "name": "list2"
      }
    ],
    "examples": [
      "var cmp = (x, y) => x.a === y.a;\n     var l1 = [{a: 1}, {a: 2}, {a: 3}];\n     var l2 = [{a: 3}, {a: 4}];\n     R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The elements in `list1` that are not in `list2`."
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.difference"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> a -> Boolean) -> [*] -> [*] -> [*]"
      }
    ],
    "meta": {
      "lineno": 1434,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 29
  },
  {
    "id": "R.gt",
    "longname": "R.gt",
    "name": "gt",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the first argument is greater than the second; `false`\notherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.gt(2, 1); //=> true\n     R.gt(2, 2); //=> false\n     R.gt(2, 3); //=> false\n     R.gt('a', 'z'); //=> false\n     R.gt('z', 'a'); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.lt"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord a => a -> a -> Boolean"
      }
    ],
    "meta": {
      "lineno": 1905,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 43
  },
  {
    "id": "R.gte",
    "longname": "R.gte",
    "name": "gte",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the first argument is greater than or equal to the second;\n`false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.gte(2, 1); //=> true\n     R.gte(2, 2); //=> true\n     R.gte(2, 3); //=> false\n     R.gte('a', 'z'); //=> false\n     R.gte('z', 'a'); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.lte"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord a => a -> a -> Boolean"
      }
    ],
    "meta": {
      "lineno": 1930,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 44
  },
  {
    "id": "R.identical",
    "longname": "R.identical",
    "name": "identical",
    "scope": "static",
    "kind": "function",
    "description": "Returns true if its arguments are identical, false otherwise. Values are\nidentical if they reference the same memory. `NaN` is identical to `NaN`;\n`0` and `-0` are not identical.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "var o = {};\n     R.identical(o, o); //=> true\n     R.identical(1, 1); //=> true\n     R.identical(1, '1'); //=> false\n     R.identical([], []); //=> false\n     R.identical(0, -0); //=> false\n     R.identical(NaN, NaN); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.15.0",
    "category": "Relation",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> a -> Boolean"
      }
    ],
    "meta": {
      "lineno": 2017,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 47
  },
  {
    "id": "R.lt",
    "longname": "R.lt",
    "name": "lt",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the first argument is less than the second; `false`\notherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.lt(2, 1); //=> false\n     R.lt(2, 2); //=> false\n     R.lt(2, 3); //=> true\n     R.lt('a', 'z'); //=> true\n     R.lt('z', 'a'); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.gt"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord a => a -> a -> Boolean"
      }
    ],
    "meta": {
      "lineno": 2412,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 60
  },
  {
    "id": "R.lte",
    "longname": "R.lte",
    "name": "lte",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the first argument is less than or equal to the second;\n`false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "Number"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.lte(2, 1); //=> false\n     R.lte(2, 2); //=> true\n     R.lte(2, 3); //=> true\n     R.lte('a', 'z'); //=> true\n     R.lte('z', 'a'); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.gte"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord a => a -> a -> Boolean"
      }
    ],
    "meta": {
      "lineno": 2437,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 61
  },
  {
    "id": "R.max",
    "longname": "R.max",
    "name": "max",
    "scope": "static",
    "kind": "function",
    "description": "Returns the larger of its two arguments.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.max(789, 123); //=> 789\n     R.max('a', 'b'); //=> 'b'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.maxBy, R.min"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord a => a -> a -> a"
      }
    ],
    "meta": {
      "lineno": 2611,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 66
  },
  {
    "id": "R.maxBy",
    "longname": "R.maxBy",
    "name": "maxBy",
    "scope": "static",
    "kind": "function",
    "description": "Takes a function and two values, and returns whichever value produces the\nlarger result when passed to the provided function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "f"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "//  square :: Number -> Number\n     var square = n => n * n;\n\n     R.maxBy(square, -3, 2); //=> -3\n\n     R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5\n     R.reduce(R.maxBy(square), 0, []); //=> 0"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.8.0",
    "category": "Relation",
    "see": [
      "R.max, R.minBy"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord b => (a -> b) -> a -> a -> a"
      }
    ],
    "meta": {
      "lineno": 2639,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 67
  },
  {
    "id": "R.min",
    "longname": "R.min",
    "name": "min",
    "scope": "static",
    "kind": "function",
    "description": "Returns the smaller of its two arguments.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.min(789, 123); //=> 123\n     R.min('a', 'b'); //=> 'a'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.minBy, R.max"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord a => a -> a -> a"
      }
    ],
    "meta": {
      "lineno": 2748,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 71
  },
  {
    "id": "R.minBy",
    "longname": "R.minBy",
    "name": "minBy",
    "scope": "static",
    "kind": "function",
    "description": "Takes a function and two values, and returns whichever value produces the\nsmaller result when passed to the provided function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "f"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "//  square :: Number -> Number\n     var square = n => n * n;\n\n     R.minBy(square, -3, 2); //=> 2\n\n     R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1\n     R.reduce(R.minBy(square), Infinity, []); //=> Infinity"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "*"
          ]
        }
      }
    ],
    "since": "v0.8.0",
    "category": "Relation",
    "see": [
      "R.min, R.maxBy"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord b => (a -> b) -> a -> a -> a"
      }
    ],
    "meta": {
      "lineno": 2776,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 72
  },
  {
    "id": "R.sortBy",
    "longname": "R.sortBy",
    "name": "sortBy",
    "scope": "static",
    "kind": "function",
    "description": "Sorts the list according to the supplied function.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to sort.",
        "name": "list"
      }
    ],
    "examples": [
      "var sortByFirstItem = R.sortBy(R.prop(0));\n     var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));\n     var pairs = [[-1, 1], [-2, 2], [-3, 3]];\n     sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]\n     var alice = {\n       name: 'ALICE',\n       age: 101\n     };\n     var bob = {\n       name: 'Bob',\n       age: -10\n     };\n     var clara = {\n       name: 'clara',\n       age: 314.159\n     };\n     var people = [clara, bob, alice];\n     sortByNameCaseInsensitive(people); //=> [alice, bob, clara]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new list sorted by the keys generated by `fn`."
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "customTags": [
      {
        "tag": "sig",
        "value": "Ord b => (a -> b) -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 3797,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 108
  },
  {
    "id": "R.equals",
    "longname": "R.equals",
    "name": "equals",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if its arguments are equivalent, `false` otherwise. Handles\ncyclical data structures.\n\nDispatches symmetrically to the `equals` methods of both arguments, if\npresent.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "a"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "b"
      }
    ],
    "examples": [
      "R.equals(1, 1); //=> true\n     R.equals(1, '1'); //=> false\n     R.equals([1, 2, 3], [1, 2, 3]); //=> true\n\n     var a = {}; a.v = a;\n     var b = {}; b.v = b;\n     R.equals(a, b); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.15.0",
    "category": "Relation",
    "customTags": [
      {
        "tag": "sig",
        "value": "a -> b -> Boolean"
      }
    ],
    "meta": {
      "lineno": 5525,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 155
  },
  {
    "id": "R.intersectionWith",
    "longname": "R.intersectionWith",
    "name": "intersectionWith",
    "scope": "static",
    "kind": "function",
    "description": "Combines two lists into a set (i.e. no duplicates) composed of those\nelements common to both lists. Duplication is determined according to the\nvalue returned by applying the supplied predicate to two list elements.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate function that determines whether\n       the two supplied elements are equal.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "One list of items to compare",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A second list of items to compare",
        "name": "list2"
      }
    ],
    "examples": [
      "var buffaloSpringfield = [\n       {id: 824, name: 'Richie Furay'},\n       {id: 956, name: 'Dewey Martin'},\n       {id: 313, name: 'Bruce Palmer'},\n       {id: 456, name: 'Stephen Stills'},\n       {id: 177, name: 'Neil Young'}\n     ];\n     var csny = [\n       {id: 204, name: 'David Crosby'},\n       {id: 456, name: 'Stephen Stills'},\n       {id: 539, name: 'Graham Nash'},\n       {id: 177, name: 'Neil Young'}\n     ];\n\n     R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);\n     //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "A new list containing those elements common to both lists."
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.intersection"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> a -> Boolean) -> [*] -> [*] -> [*]"
      }
    ],
    "meta": {
      "lineno": 5697,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 161
  },
  {
    "id": "R.pathEq",
    "longname": "R.pathEq",
    "name": "pathEq",
    "scope": "static",
    "kind": "function",
    "description": "Determines whether a nested path on an object has a specific value, in\n`R.equals` terms. Most likely used to filter a list.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The path of the nested property to use",
        "name": "path"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value to compare the nested property with",
        "name": "val"
      },
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "The object to check the nested property in",
        "name": "obj"
      }
    ],
    "examples": [
      "var user1 = { address: { zipCode: 90210 } };\n     var user2 = { address: { zipCode: 55555 } };\n     var user3 = { name: 'Bob' };\n     var users = [ user1, user2, user3 ];\n     var isFamous = R.pathEq(['address', 'zipCode'], 90210);\n     R.filter(isFamous, users); //=> [ user1 ]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if the value equals the nested object property,\n        `false` otherwise."
      }
    ],
    "since": "v0.7.0",
    "category": "Relation",
    "customTags": [
      {
        "tag": "sig",
        "value": "[String] -> * -> {String: *} -> Boolean"
      }
    ],
    "meta": {
      "lineno": 6098,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 173
  },
  {
    "id": "R.propEq",
    "longname": "R.propEq",
    "name": "propEq",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the specified object property is equal, in `R.equals`\nterms, to the given value; `false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "name"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "val"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "obj"
      }
    ],
    "examples": [
      "var abby = {name: 'Abby', age: 7, hair: 'blond'};\n     var fred = {name: 'Fred', age: 12, hair: 'brown'};\n     var rusty = {name: 'Rusty', age: 10, hair: 'brown'};\n     var alois = {name: 'Alois', age: 15, disposition: 'surly'};\n     var kids = [abby, fred, rusty, alois];\n     var hasBrownHair = R.propEq('hair', 'brown');\n     R.filter(hasBrownHair, kids); //=> [fred, rusty]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.equals, R.propSatisfies"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "String -> a -> Object -> Boolean"
      }
    ],
    "meta": {
      "lineno": 6173,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 176
  },
  {
    "id": "R.unionWith",
    "longname": "R.unionWith",
    "name": "unionWith",
    "scope": "static",
    "kind": "function",
    "description": "Combines two lists into a set (i.e. no duplicates) composed of the elements\nof each list. Duplication is determined according to the value returned by\napplying the supplied predicate to two list elements.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate used to test whether two items are equal.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first list.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second list.",
        "name": "list2"
      }
    ],
    "examples": [
      "var l1 = [{a: 1}, {a: 2}];\n     var l2 = [{a: 1}, {a: 4}];\n     R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first and second lists concatenated, with\n        duplicates removed."
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.union"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> a -> Boolean) -> [*] -> [*] -> [*]"
      }
    ],
    "meta": {
      "lineno": 6448,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 185
  },
  {
    "id": "R.countBy",
    "longname": "R.countBy",
    "name": "countBy",
    "scope": "static",
    "kind": "function",
    "description": "Counts the elements of a list according to how many match each value of a\nkey generated by the supplied function. Returns an object mapping the keys\nproduced by `fn` to the number of occurrences in the list. Note that all\nkeys are coerced to strings because of how JavaScript objects work.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "The function used to map values to keys.",
        "name": "fn"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list to count elements from.",
        "name": "list"
      }
    ],
    "examples": [
      "var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];\n     var letters = R.split('', 'abcABCaaaBBc');\n     R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}\n     R.countBy(R.toLower)(letters);   //=> {'a': 5, 'b': 4, 'c': 3}"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "An object mapping keys to number of occurrences in the list."
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> String) -> [a] -> {*}"
      }
    ],
    "meta": {
      "lineno": 6968,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 197
  },
  {
    "id": "R.eqBy",
    "longname": "R.eqBy",
    "name": "eqBy",
    "scope": "static",
    "kind": "function",
    "description": "Takes a function and two values in its domain and returns `true` if the\nvalues map to the same value in the codomain; `false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "f"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "x"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "y"
      }
    ],
    "examples": [
      "R.eqBy(Math.abs, 5, -5); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.18.0",
    "category": "Relation",
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> b) -> a -> a -> Boolean"
      }
    ],
    "meta": {
      "lineno": 7028,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 199
  },
  {
    "id": "R.difference",
    "longname": "R.difference",
    "name": "difference",
    "scope": "static",
    "kind": "function",
    "description": "Finds the set (i.e. no duplicates) of all elements in the first list not\ncontained in the second list.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first list.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second list.",
        "name": "list2"
      }
    ],
    "examples": [
      "R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]\n     R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The elements in `list1` that are not in `list2`."
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.differenceWith"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[*] -> [*] -> [*]"
      }
    ],
    "meta": {
      "lineno": 7729,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 224
  },
  {
    "id": "R.symmetricDifference",
    "longname": "R.symmetricDifference",
    "name": "symmetricDifference",
    "scope": "static",
    "kind": "function",
    "description": "Finds the set (i.e. no duplicates) of all elements contained in the first or\nsecond list, but not both.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first list.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second list.",
        "name": "list2"
      }
    ],
    "examples": [
      "R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]\n     R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The elements in `list1` or `list2`, but not both."
      }
    ],
    "since": "v0.19.0",
    "category": "Relation",
    "see": [
      "R.symmetricDifferenceWith"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[*] -> [*] -> [*]"
      }
    ],
    "meta": {
      "lineno": 8438,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 245
  },
  {
    "id": "R.symmetricDifferenceWith",
    "longname": "R.symmetricDifferenceWith",
    "name": "symmetricDifferenceWith",
    "scope": "static",
    "kind": "function",
    "description": "Finds the set (i.e. no duplicates) of all elements contained in the first or\nsecond list, but not both. Duplication is determined according to the value\nreturned by applying the supplied predicate to two list elements.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "description": "A predicate used to test whether two items are equal.",
        "name": "pred"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first list.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second list.",
        "name": "list2"
      }
    ],
    "examples": [
      "var eqA = R.eqBy(R.prop('a'));\n     var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];\n     var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];\n     R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The elements in `list1` or `list2`, but not both."
      }
    ],
    "since": "v0.19.0",
    "category": "Relation",
    "see": [
      "R.symmetricDifference"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(a -> a -> Boolean) -> [a] -> [a] -> [a]"
      }
    ],
    "meta": {
      "lineno": 8464,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 246
  },
  {
    "id": "R.intersection",
    "longname": "R.intersection",
    "name": "intersection",
    "scope": "static",
    "kind": "function",
    "description": "Combines two lists into a set (i.e. no duplicates) composed of those\nelements common to both lists.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first list.",
        "name": "list1"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second list.",
        "name": "list2"
      }
    ],
    "examples": [
      "R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list of elements found in both `list1` and `list2`."
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "see": [
      "R.intersectionWith"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "[*] -> [*] -> [*]"
      }
    ],
    "meta": {
      "lineno": 8504,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 248
  },
  {
    "id": "R.union",
    "longname": "R.union",
    "name": "union",
    "scope": "static",
    "kind": "function",
    "description": "Combines two lists into a set (i.e. no duplicates) composed of the elements\nof each list.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first list.",
        "name": "as"
      },
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The second list.",
        "name": "bs"
      }
    ],
    "examples": [
      "R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The first and second lists concatenated, with\n        duplicates removed."
      }
    ],
    "since": "v0.1.0",
    "category": "Relation",
    "customTags": [
      {
        "tag": "sig",
        "value": "[*] -> [*] -> [*]"
      }
    ],
    "meta": {
      "lineno": 8533,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 249
  },
  {
    "id": "R.match",
    "longname": "R.match",
    "name": "match",
    "scope": "static",
    "kind": "function",
    "description": "Tests a regular expression against a String. Note that this function will\nreturn an empty array when there are no matches. This differs from\n[`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)\nwhich returns `null` when there are no matches.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "RegExp"
          ]
        },
        "description": "A regular expression.",
        "name": "rx"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The string to match against",
        "name": "str"
      }
    ],
    "examples": [
      "R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']\n     R.match(/a/, 'b'); //=> []\n     R.match(/a/, null); //=> TypeError: null does not have a method named \"match\""
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The list of matches or empty array."
      }
    ],
    "since": "v0.1.0",
    "category": "String",
    "see": [
      "R.test"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "RegExp -> String -> [String | Undefined]"
      }
    ],
    "meta": {
      "lineno": 2548,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 64
  },
  {
    "id": "R.replace",
    "longname": "R.replace",
    "name": "replace",
    "scope": "static",
    "kind": "function",
    "description": "Replace a substring or regex match in a string with a replacement.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "RegExp",
            "String"
          ]
        },
        "description": "A regular expression or a substring to match.",
        "name": "pattern"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The string to replace the matches with.",
        "name": "replacement"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The String to do the search and replacement in.",
        "name": "str"
      }
    ],
    "examples": [
      "R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'\n     R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'\n\n     // Use the \"g\" (global) flag to replace all occurrences:\n     R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The result."
      }
    ],
    "since": "v0.7.0",
    "category": "String",
    "customTags": [
      {
        "tag": "sig",
        "value": "RegExp|String -> String -> String -> String"
      }
    ],
    "meta": {
      "lineno": 3624,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 102
  },
  {
    "id": "R.trim",
    "longname": "R.trim",
    "name": "trim",
    "scope": "static",
    "kind": "function",
    "description": "Removes (strips) whitespace from both ends of the string.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The string to trim.",
        "name": "str"
      }
    ],
    "examples": [
      "R.trim('   xyz  '); //=> 'xyz'\n     R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "Trimmed version of `str`."
      }
    ],
    "since": "v0.6.0",
    "category": "String",
    "customTags": [
      {
        "tag": "sig",
        "value": "String -> String"
      }
    ],
    "meta": {
      "lineno": 4230,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 122
  },
  {
    "id": "R.toString",
    "longname": "R.toString",
    "name": "toString",
    "scope": "static",
    "kind": "function",
    "description": "Returns the string representation of the given value. `eval`'ing the output\nshould result in a value equivalent to the input value. Many of the built-in\n`toString` methods do not satisfy this requirement.\n\nIf the given value is an `[object Object]` with a `toString` method other\nthan `Object.prototype.toString`, this method is invoked with no arguments\nto produce the return value. This means user-defined constructor functions\ncan provide a suitable `toString` method. For example:\n\n    function Point(x, y) {\n      this.x = x;\n      this.y = y;\n    }\n\n    Point.prototype.toString = function() {\n      return 'new Point(' + this.x + ', ' + this.y + ')';\n    };\n\n    R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "val"
      }
    ],
    "examples": [
      "R.toString(42); //=> '42'\n     R.toString('abc'); //=> '\"abc\"'\n     R.toString([1, 2, 3]); //=> '[1, 2, 3]'\n     R.toString({foo: 1, bar: 2, baz: 3}); //=> '{\"bar\": 2, \"baz\": 3, \"foo\": 1}'\n     R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date(\"2001-02-03T04:05:06.000Z\")'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        }
      }
    ],
    "since": "v0.14.0",
    "category": "String",
    "customTags": [
      {
        "tag": "sig",
        "value": "* -> String"
      }
    ],
    "meta": {
      "lineno": 7889,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 229
  },
  {
    "id": "R.split",
    "longname": "R.split",
    "name": "split",
    "scope": "static",
    "kind": "function",
    "description": "Splits a string into an array of strings based on the given\nseparator.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String",
            "RegExp"
          ]
        },
        "description": "The pattern.",
        "name": "sep"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The string to separate into an array.",
        "name": "str"
      }
    ],
    "examples": [
      "var pathComponents = R.split('/');\n     R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']\n\n     R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Array"
          ]
        },
        "description": "The array of strings from `str` separated by `str`."
      }
    ],
    "since": "v0.1.0",
    "category": "String",
    "see": [
      "R.join"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "(String | RegExp) -> String -> [String]"
      }
    ],
    "meta": {
      "lineno": 8303,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 239
  },
  {
    "id": "R.test",
    "longname": "R.test",
    "name": "test",
    "scope": "static",
    "kind": "function",
    "description": "Determines whether a given string matches a given regular expression.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "RegExp"
          ]
        },
        "name": "pattern"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "str"
      }
    ],
    "examples": [
      "R.test(/^x/, 'xyz'); //=> true\n     R.test(/^y/, 'xyz'); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.12.0",
    "category": "String",
    "see": [
      "R.match"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "RegExp -> String -> Boolean"
      }
    ],
    "meta": {
      "lineno": 8322,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 240
  },
  {
    "id": "R.toLower",
    "longname": "R.toLower",
    "name": "toLower",
    "scope": "static",
    "kind": "function",
    "description": "The lower case version of a string.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The string to lower case.",
        "name": "str"
      }
    ],
    "examples": [
      "R.toLower('XYZ'); //=> 'xyz'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The lower case version of `str`."
      }
    ],
    "since": "v0.9.0",
    "category": "String",
    "see": [
      "R.toUpper"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "String -> String"
      }
    ],
    "meta": {
      "lineno": 8344,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 241
  },
  {
    "id": "R.toUpper",
    "longname": "R.toUpper",
    "name": "toUpper",
    "scope": "static",
    "kind": "function",
    "description": "The upper case version of a string.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The string to upper case.",
        "name": "str"
      }
    ],
    "examples": [
      "R.toUpper('abc'); //=> 'ABC'"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "description": "The upper case version of `str`."
      }
    ],
    "since": "v0.9.0",
    "category": "String",
    "see": [
      "R.toLower"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "String -> String"
      }
    ],
    "meta": {
      "lineno": 8361,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 242
  },
  {
    "id": "R.is",
    "longname": "R.is",
    "name": "is",
    "scope": "static",
    "kind": "function",
    "description": "See if an object (`val`) is an instance of the supplied constructor. This\nfunction will check up the inheritance chain, if any.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "Object"
          ]
        },
        "description": "A constructor",
        "name": "ctor"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value to test",
        "name": "val"
      }
    ],
    "examples": [
      "R.is(Object, {}); //=> true\n     R.is(Number, 1); //=> true\n     R.is(Object, 1); //=> false\n     R.is(String, 's'); //=> true\n     R.is(String, new String('')); //=> true\n     R.is(Object, new String('')); //=> true\n     R.is(Object, 's'); //=> false\n     R.is(Number, {}); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.3.0",
    "category": "Type",
    "customTags": [
      {
        "tag": "sig",
        "value": "(* -> {*}) -> a -> Boolean"
      }
    ],
    "meta": {
      "lineno": 2200,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 54
  },
  {
    "id": "R.isArrayLike",
    "longname": "R.isArrayLike",
    "name": "isArrayLike",
    "scope": "static",
    "kind": "function",
    "description": "Tests whether or not an object is similar to an array.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The object to test.",
        "name": "x"
      }
    ],
    "examples": [
      "R.isArrayLike([]); //=> true\n     R.isArrayLike(true); //=> false\n     R.isArrayLike({}); //=> false\n     R.isArrayLike({length: 10}); //=> false\n     R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if `x` has a numeric length property and extreme indices defined; `false` otherwise."
      }
    ],
    "since": "v0.5.0",
    "category": "Type",
    "customTags": [
      {
        "tag": "sig",
        "value": "* -> Boolean"
      }
    ],
    "meta": {
      "lineno": 2223,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 55
  },
  {
    "id": "R.isNil",
    "longname": "R.isNil",
    "name": "isNil",
    "scope": "static",
    "kind": "function",
    "description": "Checks if the input value is `null` or `undefined`.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value to test.",
        "name": "x"
      }
    ],
    "examples": [
      "R.isNil(null); //=> true\n     R.isNil(undefined); //=> true\n     R.isNil(0); //=> false\n     R.isNil([]); //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        },
        "description": "`true` if `x` is `undefined` or `null`, otherwise `false`."
      }
    ],
    "since": "v0.9.0",
    "category": "Type",
    "customTags": [
      {
        "tag": "sig",
        "value": "* -> Boolean"
      }
    ],
    "meta": {
      "lineno": 2265,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 56
  },
  {
    "id": "R.type",
    "longname": "R.type",
    "name": "type",
    "scope": "static",
    "kind": "function",
    "description": "Gives a single-word string description of the (native) type of a value,\nreturning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not\nattempt to distinguish user Object types any further, reporting them all as\n'Object'.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "description": "The value to test",
        "name": "val"
      }
    ],
    "examples": [
      "R.type({}); //=> \"Object\"\n     R.type(1); //=> \"Number\"\n     R.type(false); //=> \"Boolean\"\n     R.type('s'); //=> \"String\"\n     R.type(null); //=> \"Null\"\n     R.type([]); //=> \"Array\"\n     R.type(/[A-z]/); //=> \"RegExp\""
    ],
    "returns": [
      {
        "type": {
          "names": [
            "String"
          ]
        }
      }
    ],
    "since": "v0.8.0",
    "category": "Type",
    "customTags": [
      {
        "tag": "sig",
        "value": "(* -> {*}) -> String"
      }
    ],
    "meta": {
      "lineno": 4301,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 124
  },
  {
    "id": "R.propIs",
    "longname": "R.propIs",
    "name": "propIs",
    "scope": "static",
    "kind": "function",
    "description": "Returns `true` if the specified object property is of the given type;\n`false` otherwise.",
    "memberof": "R",
    "params": [
      {
        "type": {
          "names": [
            "function"
          ]
        },
        "name": "type"
      },
      {
        "type": {
          "names": [
            "String"
          ]
        },
        "name": "name"
      },
      {
        "type": {
          "names": [
            "*"
          ]
        },
        "name": "obj"
      }
    ],
    "examples": [
      "R.propIs(Number, 'x', {x: 1, y: 2});  //=> true\n     R.propIs(Number, 'x', {x: 'foo'});    //=> false\n     R.propIs(Number, 'x', {});            //=> false"
    ],
    "returns": [
      {
        "type": {
          "names": [
            "Boolean"
          ]
        }
      }
    ],
    "since": "v0.16.0",
    "category": "Type",
    "see": [
      "R.is, R.propSatisfies"
    ],
    "customTags": [
      {
        "tag": "sig",
        "value": "Type -> String -> Object -> Boolean"
      }
    ],
    "meta": {
      "lineno": 6197,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 177
  },
  {
    "id": "<anonymous>~_toISOString",
    "longname": "<anonymous>~_toISOString",
    "name": "_toISOString",
    "scope": "inner",
    "kind": "member",
    "description": "Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.",
    "memberof": "<anonymous>",
    "meta": {
      "lineno": 361,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 5
  },
  {
    "id": "<anonymous>~_Set",
    "longname": "<anonymous>~_Set",
    "name": "_Set",
    "scope": "inner",
    "kind": "member",
    "description": "Combines the logic for checking whether an item is a member of the set and\nfor adding a new item to the set.",
    "memberof": "<anonymous>",
    "params": [
      {
        "description": "The item to check or add to the Set instance.",
        "name": "item"
      },
      {
        "description": "If true, the item will be added to the set if it doesn't\n                  already exist.",
        "name": "shouldAdd"
      },
      {
        "description": "The set instance to check or add to.",
        "name": "set"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "boolean"
          ]
        },
        "description": "When shouldAdd is true, this will return true when a new\n                  item was added otherwise false. When shouldAdd is false,\n                  this will return true if the item already exists, otherwise\n                  false."
      }
    ],
    "meta": {
      "lineno": 7940,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 231
  },
  {
    "id": "<anonymous>~hasOrAdd",
    "longname": "<anonymous>~hasOrAdd",
    "name": "hasOrAdd",
    "scope": "inner",
    "kind": "function",
    "description": "Combines the logic for checking whether an item is a member of the set and\nfor adding a new item to the set.",
    "memberof": "<anonymous>",
    "params": [
      {
        "description": "The item to check or add to the Set instance.",
        "name": "item"
      },
      {
        "description": "If true, the item will be added to the set if it doesn't\n                  already exist.",
        "name": "shouldAdd"
      },
      {
        "description": "The set instance to check or add to.",
        "name": "set"
      }
    ],
    "returns": [
      {
        "type": {
          "names": [
            "boolean"
          ]
        },
        "description": "When shouldAdd is true, this will return true when a new\n                  item was added otherwise false. When shouldAdd is false,\n                  this will return true if the item already exists, otherwise\n                  false."
      }
    ],
    "meta": {
      "lineno": 7965,
      "filename": "ramda.js",
      "path": "/home/iuz/Scrivania/ramcs/node_modules/ramda/dist"
    },
    "order": 232
  }
]
