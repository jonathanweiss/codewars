// https://www.codewars.com/kata/once/train/javascript/58e213c0320144f68b000192

function once(fn) {
  var wrapper = function(){
    if (fn.called === undefined) {
      fn.called = true;
      return fn(...arguments);
    } else {
      return undefined;
    }
  }
  return wrapper;
}
