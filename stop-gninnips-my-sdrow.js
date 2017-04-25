// https://www.codewars.com/kata/stop-gninnips-my-sdrow

const spinWords = words =>  words.split(' ').map(word => word.length > 4 ? word.split('').reverse().join('') : word).join(' ');
