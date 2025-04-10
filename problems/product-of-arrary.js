// Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except
// nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.
// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

function productOfArray(arr) {
  if (arr.length == 0) return [];
  let result = Array(arr.length).fill(1);

  let prefix = 1;
  for (let index = 0; index < arr.length; index++) {
    result[index] = prefix;
    prefix = prefix * arr[index];
  }

  console.log(result);

  let suffix = 1;
  for (let index = arr.length - 1; index >= 0; index--) {
    result[index] *= suffix;
    suffix *= arr[index];
  }

  return result.map((v) => Math.abs(v));
}

console.log(productOfArray([-1, 1, 0, -3, 3]));
