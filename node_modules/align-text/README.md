# align-text [![NPM version](https://img.shields.io/npm/v/align-text.svg?style=flat)](https://www.npmjs.com/package/align-text) [![NPM monthly downloads](https://img.shields.io/npm/dm/align-text.svg?style=flat)](https://npmjs.org/package/align-text) [![NPM total downloads](https://img.shields.io/npm/dt/align-text.svg?style=flat)](https://npmjs.org/package/align-text) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/align-text.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/align-text)

> Align the text in a string.

Follow this project's author, [Jon Schlinkert](https://github.com/jonschlinkert), for updates on this project and others.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save align-text
```

## Usage

```js
var align = require('align-text');

align(text, function_or_integer);
```

**Params**

* `text` can be a **string or array**. If a string is passed, a string will be returned. If an array is passed, an array will be returned.
* `function|integer`: if an integer, the text will be indented by that amount. If a transform function is passed, it must return an object with an `integer` property or an integer representing the amount of leading indentation to use as `align` loops over each line.

**Example**

```js
align(text, 4);
```

Would align:

```
abc
abc
abc
```
To:

```
    abc
    abc
    abc
```

## Transform function

### params

The callback is used to determine the indentation of each line and gets the following params:

* `len` the length of the "current" line
* `longest` the length of the longest line
* `line` the current line (string) being aligned
* `lines` the array of all lines

### return

The callback may return:

* an integer that represents the number of spaces to use for padding,
* or an object with the following properties:
  - `indent`: **{Number}** the amount of indentation to use. Default is `0` when an object is returned.
  - `character`: **{String}** the character to use for indentation. Default is `''` (empty string) when an object is returned.
  - `prefix`: **{String}** leading characters to use at the beginning of each line. `''` (empty string) when an object is returned.

**Integer example:**

```js
// calculate half the difference between the length
// of the current line and the longest line
function centerAlign(len, longest, line, lines) {
  return Math.floor((longest - len) / 2);
}
```

**Object example:**

```js
function centerAlign(len, longest, line, lines) {
  return {
    character: '\t',
    indent: Math.floor((longest - len) / 2),
    prefix: '~ ',
  }
}
```

## Usage examples

Align text values in an array:

```js
align([1, 2, 3, 100]);
//=> ['  1', '  2', '  3', '100']
```

Or [do stuff like this](./example.js):

![screen shot 2015-06-09 at 2 08 34 am](https://cloud.githubusercontent.com/assets/383994/8051597/7b716fbc-0e4c-11e5-9aef-4493fd22db58.png)

Visit [the example](./example.js) to see how this works.

### Center align

Using the `centerAlign` function from above:

```js
align(text, centerAlign);
```

Would align this text:

```js
Lorem ipsum dolor sit amet
consectetur adipiscin
elit, sed do eiusmod tempor incididun
ut labore et dolor
magna aliqua. Ut enim ad mini
veniam, quis
```

Resulting in this:

```
     Lorem ipsum dolor sit amet,
        consectetur adipiscing
elit, sed do eiusmod tempor incididunt
         ut labore et dolore
    magna aliqua. Ut enim ad minim
             veniam, quis
```

**Customize**

If you wanted to add more padding on the left, just pass the number in the callback.

For example, to add 4 spaces before every line:

```js
function centerAlign(len, longest, line, lines) {
  return 4 + Math.floor((longest - len) / 2);
}
```

Would result in:

```
         Lorem ipsum dolor sit amet,
            consectetur adipiscing
    elit, sed do eiusmod tempor incididunt
             ut labore et dolore
        magna aliqua. Ut enim ad minim
                 veniam, quis
```

### Bullets

```js
align(text, function (len, max, line, lines) {
  return {prefix: ' - '};
});
```
Would return:

```
- Lorem ipsum dolor sit amet,
- consectetur adipiscing
- elit, sed do eiusmod tempor incididunt
- ut labore et dolore
- magna aliqua. Ut enim ad minim
- veniam, quis
```

### Different indent character

```js
align(text, function (len, max, line, lines) {
  return { 
    indent: Math.floor((max - len) / 2), 
    character: '~', 
  };
});
```
Would return

```
~~~~~Lorem ipsum dolor sit amet,
~~~~~~~~consectetur adipiscing
elit, sed do eiusmod tempor incididunt
~~~~~~~~~ut labore et dolore
~~~~magna aliqua. Ut enim ad minim
~~~~~~~~~~~~~veniam, quis
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 14 | [jonschlinkert](https://github.com/jonschlinkert) |
| 2 | [shinnn](https://github.com/shinnn) |

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on September 13, 2017._