// https://www.codewars.com/kata/deep-comparison-of-objects

function deepCompare(o1, o2) {
  if (
    (o1 !== null && typeof o1 === 'object') &&
    (o2 !== null && typeof o2 === 'object')
  ) {
    let keys1 = Object.keys(o1);
    let keys2 = Object.keys(o2);
    let keys = keys1.length > keys2.length ? keys1 : keys2;

    return keys.every(key => deepCompare(o1[key], o2[key]));
  } else {
    return o1 === o2;
  }
};