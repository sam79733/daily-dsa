// find floor and ceil value from sorted arr
// [5,8,12,14,15,16]
// Floor -- largest value in array that arr[index] <= target
// ceitl -- smallest value in array that arr[index] >= target
// target = 13
// floor = 12
// ceil = 14

function floor(arr, target) {
  let ans = -1;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= target) {
        ans = arr[mid];
        low = mid + 1;
    }
    else{
        high= mid - 1;
    }
  }
  return ans;
}

function ceil(arr, target) {
  let ans = -1;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = arr[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

let arr = [5, 8, 12, 14, 15, 16];
console.log(ceil(arr, 13));

