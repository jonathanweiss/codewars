// https://www.codewars.com/kata/excel-sheet-column-numbers

const titleToNumber = title => (
  title
    .split('')
    .reduce((result, char, index, array) => (
      result + (char.charCodeAt(0) - 64) * Math.pow(26, (array.length - index - 1))
    ), 0)
)
