// https://www.codewars.com/kata/find-the-unique-number-1

function findUniq(arr) {
  let last = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== last) {
      if (i === 1) {
        // edge case: we found a different number on index 1
        // which one is the non-equal: 0 or 1?
        return arr[1] === arr[2] ? arr[0] : arr[1];
      } else {
        return arr[i];
      }
    } else {
      last = arr[i];
    }
  }
}
