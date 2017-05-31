// https://www.codewars.com/kata/zipwith

const zipWith = (fn, a0, a1) => (
  a0
    .map((n, i) => (a0[i] !== undefined && a1[i] !== undefined) ? fn(a0[i], a1[i]) : null)
    .filter(n => n !== null)
);
