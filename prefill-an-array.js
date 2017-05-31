// https://www.codewars.com/kata/prefill-an-array

function prefill(n, v) {
  const parsedNumber = parseFloat(n);

  if (
    !isNaN(parseInt(parsedNumber, 10)) &&
    parsedNumber % 1 === 0 &&
    parsedNumber >= 0
  ) {
    const a = Array(parsedNumber);

    for (let i = 0; i < parsedNumber; i++) {
      a[i] = typeof v === 'undefined' ? undefined : v;
    }

    return a;

  } else {
    throw new TypeError(`${n} is invalid`);
  }
}
