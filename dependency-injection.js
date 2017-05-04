// https://www.codewars.com/kata/dependency-injection

// Too lazy for a regex here... :P
const getParams = func => (
  func
    .toString()
    .split('{')[0]
    .split('(')[1]
    .split(')')[0]
    .split(',')
    .map(p => p.trim())
    .filter(p => p)
);

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  const paramNames = getParams(func);
  const dependencies = paramNames.map(key => this.dependency[key]);

  return () => func.apply(null, dependencies);
}