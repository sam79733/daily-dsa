// find first and last occurance of a number from a sorted array
// if we get the the index i.e first = i, last= j: ans -> (i, j)
// if we get both first and last on same index, ans will be (i,i)
// if we get dont get both first and last index , return (-1, -1)

function firstAndLastOccurance(arr, target) {
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

  return { first: first, last: last };
}

let arr = [1, 2, 11, 12, 15, 15];

let obj = firstAndLastOccurance(arr, 20);

console.log(obj.first, obj.last);
