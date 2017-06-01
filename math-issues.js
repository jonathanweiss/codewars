//https://www.codewars.com/kata/math-issues/train/javascript/58e20da55e2ad24f3b00019d

const getParts = number => {
  const numberAsString = ('' + number);
  if (numberAsString.indexOf('.') === -1) {
    return [number, 0];
  } else {
    return numberAsString.split('.').map(n => +n);
  }
};


Math.round = function(number) {
  let [digits, rest] = getParts(number);
  const restAsString = '' + rest;
  const middleAsString = 5 + '0'.repeat(restAsString.length - 1);
  const middle = +middleAsString;

  if (rest >= middle) {
    digits++;
  }
  return digits;
};

Math.ceil = function(number) {
  let [digits, rest] = getParts(number);
  if (rest > 0) {
    digits++;
  }
  return digits;
};

Math.floor = function(number) {
  return getParts(number)[0];
};
