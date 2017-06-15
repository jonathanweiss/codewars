// https://www.codewars.com/kata/counting-duplicates

function duplicateCount(text){
  const ht = text
    .toLowerCase()
    .split('')
    .reduce((result, current) => {
      if (result[current]) {
        result[current]++;
      } else {
        result[current] = 1;
      }

      return result;
    }, {});

  return Object.keys(ht)
    .filter(n => ht[n] > 1)
    .length;
}
