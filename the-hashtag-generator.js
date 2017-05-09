// https://www.codewars.com/kata/the-hashtag-generator

function generateHashtag (str) {
  const hash = '#' +
    str
      .split(' ')
      .map(s => {
        if (s.length > 0) {
          return s[0].toUpperCase() + s.substring(1);
        }
      })
      .join('');

  if (str.length < 1 || hash.length > 140) {
    return false;
  } else {
    return hash;
  }
}
