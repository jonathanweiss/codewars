// https://www.codewars.com/kata/youre-a-square

const isSquare = n => (
  n >= 0 ?
    Math.pow(Math.round(Math.sqrt(n)), 2) === n :
    false
);
