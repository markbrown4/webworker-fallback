'use strict';

var $ = function $(selector) {
  return document.querySelector(selector);
};
var $count = $('.count');

var worker = new Worker('dist/thread.js');
worker.onmessage = function (_ref) {
  var data = _ref.data;

  console.log(data);
  $count.innerHTML = data.counter;
};
$('.increment').addEventListener('click', function () {
  worker.postMessage({ type: "increment" });
}, false);
$('.decrement').addEventListener('click', function () {
  worker.postMessage({ type: "decrement" });
}, false);