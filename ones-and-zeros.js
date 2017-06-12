// https://www.codewars.com/kata/ones-and-zeros

const binaryArrayToNumber = arr => (
  arr.reduce((result, value, index, array) => (
    result + (value * Math.pow(2, array.length - 1 - index))
  ), 0)
);
