'use strict';

var state = {
  counter: 0
};

var updateState = function updateState(_ref) {
  var type = _ref.type;
  var _ref$payload = _ref.payload;
  var payload = _ref$payload === undefined ? {} : _ref$payload;

  if (type == 'increment') {
    state.counter++;
  } else if (type == 'decrement') {
    state.counter--;
  }

  return state;
};

self.onmessage = function (_ref2) {
  var data = _ref2.data;

  var state = updateState(data);
  self.postMessage(state);
};