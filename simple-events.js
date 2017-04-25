// https://www.codewars.com/kata/52d3b68215be7c2d5300022f

function Event() {
  this._subscribers = [];
}

Event.prototype.subscribe = function(fnc) {
  this._subscribers.push(fnc);
};

Event.prototype.unsubscribe = function(fnc) {
  var index = this._subscribers.findIndex(f => f === fnc);
  if (index !== -1) {
    delete this._subscribers[index];
  }
};

Event.prototype.emit = function(...args) {
  this._subscribers.forEach(handler => handler.apply(null, args));
}