// https://www.codewars.com/kata/sort-one-three-two

const lookup = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 0: 'ten', 1: 'eleven', 2: 'twelve', 3: 'thirteen', 5: 'fifteen', 8: 'eighteen' };
const specialFirstDigits = { 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty' };

const getWordForNumber = n => {
  const result = [];

  if (lookup[n]) {
    // single digit or special two-digit case
    result.push(lookup[n]);
  } else {
    let digits = ('' + n).split('');
    
    // three digit number
    if (n > 99) {
      // first digit + 100
      result.push(getWordForNumber(digits.shift()) + '-');
      result.push('hundred');

      // two zeros will be ignored
      if (digits.join('') !== '00') {
        // rest of the digits recursively
        result.push(getWordForNumber(+digits.join('')));
      }
    // two digit number
    } else if (n > 10) {
      let firstDigit = +digits.shift();
      
      // special cases: 10s
      if (firstDigit === 1) {
        result.push(getWordForNumber(+digits[0]));
        result.push('teen');
      } else {
        // special cases: twenty, thirty, ...
        if (specialFirstDigits[firstDigit]) {
          result.push(specialFirstDigits[firstDigit]);
        } else {
          // normal case: first digit + 'ty'
          result.push(getWordForNumber(firstDigit));
          result.push('ty');  
        }
        
        if (+digits[0] > 0) {
          // rest of the digits recursively
          result.push(getWordForNumber(+digits[0]));  
        }
        
      }
    }
  }
  
  return result.join('');
};

function sortByName(ary) {
  // use a cache to improve performance for repeating numbers
  const cache = {};
  return ary.sort((a, b) => {
    let wordA, wordB;

    if (cache[a]) {
      wordA = cache[a];
    } else {
      wordA = getWordForNumber(a);
      cache[a] = wordA;
    }

    if (cache[b]) {
      wordB = cache[b];
    } else {
      wordB = getWordForNumber(b);
      cache[b] = wordB;
    }

    return wordA > wordB ? 1 : -1;
  });
}