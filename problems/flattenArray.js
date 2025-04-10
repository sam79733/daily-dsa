// write custom function Array.flat()

const flattenRecurssive = (arr) => {
  if (!Array.isArray(arr)) {
    return 'input param must be an array';
  }

  const result = [];

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      result.push(...flattenRecurssive(ele));
    } else {
      result.push(ele);
    }
  }

  return result;
};

const flattenRecursiveWithDepth = (arr, depth) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('input must be an array');
  }

  let result = [];

  if (depth === 0) {
    return arr;
  }

  for (let ele of arr) {
    if (Array.isArray(ele) && depth > 0) {
      result.push(...flattenRecursiveWithDepth(ele, depth - 1));
    } else {
      result.push(ele);
    }
  }

  return result;
};

const flattenRec = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('input must be an array');
  }

  const result = [];

  for (let ele of arr) {
    if (Array.isArray(ele)) {
      result.push(...flattenRec(ele));
    } else {
      result.push(ele);
    }
  }

  return result;
};

const flattenIterative_1 = (arr) => {
  if (!Array.isArray(arr)) {
    return new TypeError('input must be an array');
  }
  const stack = [...arr];
  const result = [];

  while (stack.length) {
    const ele = stack.pop();
    if (Array.isArray(ele)) {
      stack.push(...ele);
    } else {
      result.push(ele);
    }
  }
  return result.reverse();
};

const arr = [1, [2, [3, 4], 5], 6];
console.log(flattenRecurssive(arr));
console.log(flattenRecursiveWithDepth(arr, 4));
