// https://www.codewars.com/kata/calculating-with-functions

const zero = arg => arg ? arg[0](arg[1], 0) : 0;
const one = arg => arg ? arg[0](arg[1], 1) : 1;
const two = arg => arg ? arg[0](arg[1], 2) : 2;
const three = arg => arg ? arg[0](arg[1], 3) : 3;
const four = arg => arg ? arg[0](arg[1], 4) : 4;
const five = arg => arg ? arg[0](arg[1], 5) : 5;
const six = arg => arg ? arg[0](arg[1], 6) : 6;
const seven = arg => arg ? arg[0](arg[1], 7) : 7;
const eight = arg => arg ? arg[0](arg[1], 8) : 8;
const nine = arg => arg ? arg[0](arg[1], 9) : 9;

const plus = (a, b) => (typeof b === 'undefined') ? [plus, a] : b + a;
const minus = (a, b) => (typeof b === 'undefined') ? [minus, a] : b - a;
const times = (a, b) => (typeof b === 'undefined') ? [times, a] : b * a;
const dividedBy = (a, b) => (typeof b === 'undefined') ? [dividedBy, a] : b / a;
