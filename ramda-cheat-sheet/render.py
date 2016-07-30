import json
from collections import defaultdict
from mako.template import Template

with open('./ramda-fn-listing.js') as fh:
  fn_listing = json.load(fh)

with open('./ramda-jsdoc-data.js') as fh:
  allData = json.load(fh)
  descriptions = dict(
    (item['name'], item['description'], )
    for item in allData
  )

with open('./node_modules/ramda/package.json') as fh:
  pkg_data = json.load(fh)

with open('dist/index.html', 'w') as out:
  index_tpl = Template(filename='templates/index.html')
  kwargs = {
    "categories": fn_listing,
    "descriptions": descriptions,
    "package": pkg_data,
  }
  out.write(index_tpl.render(**kwargs))

with open('dist/style.css', 'w') as out:
  css_tpl = Template(filename='templates/style.css')
  out.write(css_tpl.render())
