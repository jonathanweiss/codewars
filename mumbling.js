// https://www.codewars.com/kata/mumbling

const accum = s => (
  s.split('')
    .reduce((result, c, index) => {
      result.push(c.toUpperCase() + c.toLowerCase().repeat(index));
      return result;
    }, [])
    .join('-')
);
