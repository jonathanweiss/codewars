// https://www.codewars.com/kata/dashatize-it

function dashatize(num) {
  let lastOdd = false;

  let string = isNaN(num) ?
    'NaN' :
    ('' + Math.abs(num))
      .split('')
      .map((c, index) => {
        return {
          isEven: +c % 2 === 0,
          char: c,
          index
        };
      })
      .reduce((string, entry, index, array) => {
        let result;
        if (!entry.isEven) {
          if (lastOdd) {
            result =  string + `${entry.char}-`;
          } else {
            if (index === 0) {
              result =  string + `${entry.char}-`;
            } else {
              result =  string + `-${entry.char}-`;
            }
          }
          lastOdd = true;
        } else {
          lastOdd = false;
          result = string + entry.char;
        }

        return result;
      }, '')

      if (string[string.length - 1] === '-') {
        return string.substring(0, string.length -1);
      } else {
        return string;
      }
};
