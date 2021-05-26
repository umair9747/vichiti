/*!
 * align-text <https://github.com/jonschlinkert/align-text>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var typeOf = require('kind-of');
var repeat = require('repeat-string');
var longest = require('longest');

module.exports = function alignText(val, fn) {
  var originalType = typeOf(val);
  var lines = val;

  if (originalType === 'string') {
    lines = val.split(/(?:\r\n|\n)/);
  } else if (originalType !== 'array') {
    throw new TypeError('align-text expects a string or array.');
  }

  var fnType = typeOf(fn);
  var max = longest(lines);
  var len = lines.length;
  var idx = -1;
  var res = [];

  while (++idx < len) {
    var line = String(lines[idx]);
    var diff;

    if (fnType === 'function') {
      diff = fn(line.length, max.length, line, lines, idx);
    } else if (fnType === 'number') {
      diff = fn;
    } else {
      diff = max.length - line.length;
    }

    if (typeOf(diff) === 'number') {
      res.push(repeat(' ', diff) + line);
    } else if (typeOf(diff) === 'object') {
      var result = repeat(diff.character || ' ', diff.indent || 0);
      res.push((diff.prefix || '') + result + line);
    }
  }

  if (originalType === 'array') return res;
  return res.join('\n');
};
