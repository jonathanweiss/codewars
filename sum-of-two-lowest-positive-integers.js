// https://www.codewars.com/kata/sum-of-two-lowest-positive-integers/solutions/javascript/me/best_practice

const sumTwoSmallestNumbers = numbers => (
    [...numbers]
      .sort((a, b) => a - b)
      .reduce((result, n, index) => result + ((index < 2) ? n : 0), 0)
);
