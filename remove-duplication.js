// https://www.codewars.com/kata/remove-duplication

const removeDuplication = arr => {
  const numbers = {};
  arr.forEach(n => numbers[n] ? numbers[n]++ : numbers[n] = 1);

  return Object
    .keys(numbers)
    .filter(n => numbers[n] === 1)
    .map(n => +n);
};
