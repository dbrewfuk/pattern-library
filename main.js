(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var supports = require('./supports');

// Add an `is-legacy` class on browsers that don't supports flexbox.
if (!supports.flexbox()) {
  var div = document.createElement('div');
  div.className = 'Error';
  div.innerHTML = 'Your browser does not support Flexbox.\n                   Parts of this site may not appear as expected.';

  document.body.insertBefore(div, document.body.firstChild);
}

},{"./supports":2}],2:[function(require,module,exports){
'use strict';

var supports = {};
var style = document.body.style;

module.exports = {
  flexbox: function flexbox() {
    return supports.flexbox || (supports.flexbox = 'flexBasis' in style || 'msFlexAlign' in style || 'webkitBoxDirection' in style);
  }
};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
