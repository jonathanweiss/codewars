// https://www.codewars.com/kata/sum-of-numbers-from-0-to-n

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
    if (count === 0) {
      return '0=0';
    } else if (count < 0) {
      return count + '<0';
    } else {
  
      const digits = [];
      let c = 0;

      while(c <= count) digits.push(c++);     
      return digits.join('+') + ' = ' + digits.reduce((prev, curr) => prev + curr, 0);
    }
  };

  return SequenceSum;

})();