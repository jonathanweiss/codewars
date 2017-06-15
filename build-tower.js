// https://www.codewars.com/kata/build-tower

function towerBuilder(nFloors) {
  const tower = [];

  for (let i = 0; i < nFloors; i++) {
    tower.push(
      ' '.repeat(i) +
      '*'.repeat(1 + (2 * (nFloors - 1 - i))) +
      ' '.repeat(i)
    );
  }

  return tower.reverse();
}
