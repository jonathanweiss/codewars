// https://www.codewars.com/kata/are-they-the-same

const comp = (a1, a2) => {
  return (a1 && a2 && a1.length === a2.length) ?
    a1.map(n => n * n).sort().toString() === a2.sort().toString() :
    false;
}
