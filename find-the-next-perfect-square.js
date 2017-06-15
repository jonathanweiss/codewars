// https://www.codewars.com/kata/find-the-next-perfect-square

function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
  let base = Math.sqrt(sq);

  if ((''+base).indexOf('.') === -1) {
    ++base;
    return base * base;
  } else {
    return -1;
  }
}
