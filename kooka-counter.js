// https://www.codewars.com/kata/kooka-counter/train/javascript/590c4fc3cd3b996f0d000035

const kookaCounter = laughing => {
  let last = '';

  return laughing
    .split('')
    .reduce((res, curr) => {
      if (curr.toUpperCase() === 'H' && (last != curr || last === '')) {
        last = curr;
        res++;
      }
      return res;
    }, 0);
};
