// given a rotated sorted array [7,8,9,1,2,3,4,5,6]
// find given element is available in the array or not
// key point to remember-- to find out the sorted array and then apply binary search
// in case of rotated sorted array, one half would not be sorted for sure and one would be sorted

function findNumInRotatedSortedArray(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) return mid;

    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      }
      else
      {
        high = mid - 1;
      }
    }
  }

  return -1;
}

let ar = [5,1,3];
console.log(findNumInRotatedSortedArray(ar, 3));