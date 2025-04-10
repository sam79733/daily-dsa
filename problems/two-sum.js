// Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

let num = 10;

//10 x 9 x 8 ..1

function factorial(num) {
  if (num == 0 || num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(0));

function fibonacci(number, memo = {}) {
  if (number <= 1) return number;
  if (memo[number]) return memo[number];

  memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);

  return memo[number];
}

console.log(fibonacci(50));

function twoSum(arr, target) {
  const numToIndex = {};

  for (let index = 0; index < arr.length; index++) {
    const num = arr[index];
    const complement = target - num;
    if (complement in numToIndex) {
      return [numToIndex[complement], index];
    }

    numToIndex[num] = index;
  }

  return [];
}

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
