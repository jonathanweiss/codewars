// https://www.codewars.com/kata/rock-paper-scissors
const rps = (p1, p2) => {
  const wins = { scissors: 'paper', paper: 'rock', rock: 'scissors' };
  return (p1 === p2) ? 'Draw!' : `Player ${(wins[p1] === p2) ? 1 : 2} won!`
};
