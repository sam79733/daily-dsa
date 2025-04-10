// write a pollyfills for map, reduce, filter, every

Array.prototype.myMap = function (cb) {
  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }

  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

Array.prototype.myReduce = function (cb, initialValue) {
  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }

  let accumulator = initialValue !== undefined ? initialValue : this[0];
  let startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }

  return accumulator;
};

Array.prototype.myFilter = function (cb) {
  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }

  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myEvery = function (cb) {
  if (typeof cb !== 'function') {
    throw new TypeError(cb + ' is not a function');
  }

  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }
  return true;
};

const number = [10, 4, 6, 1];
console.log(number.myMap((ele) => ele * 2));

console.log(number.myReduce((acc, curr) => acc + curr, 0));

console.log(number.myFilter((ele) => ele % 2 === 0));
console.log(number.myEvery((ele) => ele > 1));
