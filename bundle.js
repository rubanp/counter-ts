(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Counter = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Counter=function(){function t(e){_classCallCheck(this,t),this.start=e.start,this.end=e.end,this.selector=e.selector,this.done=e.done,this.duration=e.duration||2e3}return _createClass(t,[{key:"run",value:function(){requestAnimationFrame(this._tick.bind(this))}},{key:"_tick",value:function(t){return this.timeStart||(this.timeStart=t),this.timeElapsed=t-this.timeStart,this.next=this._ease(this.timeElapsed,this.start,this.end-this.start,this.duration),this.selector.textContent=Math.round(this.next),this.next<this.end?requestAnimationFrame(this._tick.bind(this)):this.done()}},{key:"_ease",value:function(t,e,n,i){return n*(-Math.pow(2,-10*t/i)+1)*1024/1023+e}}]),t}();exports["default"]=Counter,module.exports=exports["default"];

},{}]},{},[1])(1)
});