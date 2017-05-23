// https://www.codewars.com/kata/remove-the-minimum

const removeSmallest = numbers => {
  const smallest = Math.min(...numbers);
  const smallestIndex = numbers.findIndex(number => number === smallest);
  const result = [...numbers];

  result.splice(smallestIndex, 1);

  return result;
};
