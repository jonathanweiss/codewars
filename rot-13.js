// https://www.codewars.com/kata/rot13-1

function rot13(message){
  const charsLower = 'abcdefghijklmnopqrstuvwxyz';
  const charsUpper = charsLower.toUpperCase();
  const rot = (n, list) => list[n + 13 <= list.length - 1 ? n + 13 : n + 13 - list.length];
  
  return message
    .split('')
    .map(n => {
      const indexLower = charsLower.indexOf(n);
      const indexUpper = charsUpper.indexOf(n);
      let result;
    
      if (indexLower !== -1) {
        result = rot(indexLower, charsLower);
      } else if (indexUpper !== -1) {
        result = rot(indexUpper, charsUpper);
      } else {
        result = n;
      }
      
      return result;
    })
    .join('')
}
