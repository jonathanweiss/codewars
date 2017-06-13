// https://www.codewars.com/kata/write-number-in-expanded-form

function expandedForm(num) {
  return ('' + num)
    .split('')
    .map((c, index, array) => {
      if (c !== '0') {
        return c + '0'.repeat(array.length - index - 1);
      }
    })
    .filter(c => c)
    .join(' + ');
}
