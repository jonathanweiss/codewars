// https://www.codewars.com/kata/time-like-string-format

function solution(hour) {
  const hourAsString = '' + hour;

  if (hourAsString.length > 4 || hourAsString.length < 3) {
    throw new Error();
  }

  const result = [];
  const isShort = hourAsString.length === 3;

  result.push(hourAsString.substring(0, isShort ? 1 : 2));
  result.push(hourAsString.substring(isShort ? 1 : 2));

return result[0] + ':' + result[1];
}
