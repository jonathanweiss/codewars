// https://www.codewars.com/kata/exclamation-marks-series-number-17-put-the-exclamation-marks-and-question-marks-to-the-balance-are-they-balanced

function balance(left,right){
  const calculate = a => a.split('').reduce((res, c) => res + (c === '!' ? 2 : 3), 0);
  const leftWeight = calculate(left);
  const rightWeight = calculate(right);

  return (leftWeight === rightWeight) ?
    'Balance' :
      (rightWeight > leftWeight) ?
        'Right' :
        'Left';
}
