// https://www.codewars.com/kata/hard-time-bomb

// I used Object.assign({}, Bomb).toString() to figure out the prefix "boom" for the variable

var wireCode; // Find the wire.

for (let i = 0; i < 10; i++) {
  if (global['boom' + i]) {
    wireCode = global['boom' + i];
    break;
  }
}

Bomb.CutTheWire(wireCode);