// https://www.codewars.com/kata/formatting-a-number-as-price

var numberToPrice = function(number) {
  if (typeof number === 'number') {
    const numberAsString = '' + number;
    const isNegative = number < 0;
    let beforeDot, afterDot;

    if (numberAsString.indexOf('.') !== -1) {
      [beforeDot, afterDot] = numberAsString.split('.');
    } else {
      beforeDot = numberAsString;
      afterDot = '00';
    }

    if (afterDot.length === 1) {
      afterDot += '0';
    } else {
      afterDot = afterDot.substring(0, 2);
    }

    beforeDot = '' + Math.abs(parseInt(beforeDot, 10));

    if (beforeDot.length > 3) {
      beforeDot = beforeDot
        .split('')
        .reverse()
        .map((c, index) => (index > 0 && index % 3 === 0) ? c + ',' : c)
        .reverse()
        .join('');
    }

    return `${isNegative ? '-' : ''}${beforeDot}.${afterDot}`;
  } else {
    return 'NaN';
  }
}
