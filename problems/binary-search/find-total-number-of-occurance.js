// given a sorted array, find the number of occurance of given value
// example = [1,2,4,6,8,8,8,10] and num = 8 -> ans : 3, count(8)
//this is the same problem of first-last-occurance with little twick
// once we get fist and last then total number of occurance - (last - first ) + 1
// therefore copy pasting same code with change in return function

function findTotalNumberOfOccurance(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  let first = -1;
  let last = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  low = 0;
  high = arr.length - 1;

  while (low <= high && first != -1) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] == target) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return first == -1 ? 0 : last - first + 1;
}

let arr = [1, 2, 8, 8, 8, 8, 8, 11, 12, 15, 15];

let value = findTotalNumberOfOccurance(arr, 18);

console.log(value);
