// https://www.codewars.com/kata/find-the-odd-int

const findOdd = list => {
  const tmp = list.reduce((tmp, n) => {
    tmp[n] = (typeof tmp[n] !== 'undefined') ?
      tmp[n] + 1 : 1;
    return tmp;
  }, {})

  return +Object.keys(tmp).find(i => tmp[i] % 2 !== 0);
};
