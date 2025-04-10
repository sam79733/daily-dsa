//Create pipe function that would take series of function and excute from left to right on given input value
const pipe = (...functions) => {
  return function (input) {
    return functions.reduce((acc, f) => f(acc), input);
  };
};

const add = (x) => x + 2;
const mull = (x) => x * 4;
const sub = (x) => x - 3;

console.log(pipe(add, mull, sub)(10));

// create a compose function to execute the series of function in prev quest from right to left

const compose =
  (...functions) =>
  (input) => {
    return functions.reduceRight((acc, f) => f(acc), input);
  };

console.log(compose(add, mull, sub)(10));
