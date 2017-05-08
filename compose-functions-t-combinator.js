// https://www.codewars.com/kata/compose-functions-t-combinator

var compose = function(...args) {
  const helper = ([...innerArgs]) => {
    if (innerArgs.length <= 1) {
      return innerArgs[0];
    } else {
      return innerArgs[0](helper(innerArgs.slice(1)));
    }
  };
  
  return helper(args.reverse());
}
