// https://www.codewars.com/kata/sort-the-odd

function sortArray(array) {
  const odds = array
    .filter(n => n > 0 && n % 2 !== 0)
    .sort((a, b) => a - b);

  return array.map(n => n % 2 === 0 ? n : odds.shift());
}
