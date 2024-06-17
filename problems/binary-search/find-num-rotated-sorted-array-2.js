/* 
given a rotated sorted array with duplicate value [3 ,3, 1,2, 3,3,3,3]
find given element is available in the array or not
key point to remember-- trim down the array from both side if low, mid and high
all three are equal and unable to find sorted array

  */

function findNumInRotatedSortedArrayII(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let counter = 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target){
      return 1;
    } 

    if (arr[low] == arr[mid] && arr[mid] == arr[high]) {
      low = low + 1;
      high = high - 1;
      continue;
    }

    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

let ar = [3, 3, 1, 2, 3, 3, 3, 3, 3];
console.log(findNumInRotatedSortedArrayII(ar, 2));
