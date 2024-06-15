// given a distinct sorted array, find index to insert given target value.
// arr = [1,4,5,6,7]
//target = 3
// ans = 1

function searchInsert(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let ans = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}


let arr = [1, 4, 5, 6, 7];

console.log(searchInsert(arr, 0));