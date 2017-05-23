// https://www.codewars.com/kata/shortest-word

function findShort(s){
  return s.split(' ').sort(function(a, b){
    return a.length > b.length ? 1 : -1;
  })[0].length;
}
