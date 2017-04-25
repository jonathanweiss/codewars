// https://www.codewars.com/kata/good-vs-evil

function goodVsEvil(good, evil){
  const calc = (lookup, result, n, i) => (+result) + (n * lookup[i]);
  
  const results = [
    'Battle Result: No victor on this battle field',
    'Battle Result: Good triumphs over Evil',
    'Battle Result: Evil eradicates all trace of Good',
  ];  
  
  const result = good.split(' ').reduce(calc.bind(null, [1, 2, 3, 3, 4, 10])) -
                 evil.split(' ').reduce(calc.bind(null, [1, 2, 2, 2, 3, 5, 10]))

  return results[result === 0 ? 0 : result > 0 ? 1 : 2];
}
