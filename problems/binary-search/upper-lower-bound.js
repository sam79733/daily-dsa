//lower bound : find smallest index of given array i.e arr[index] >= num

function lower_bound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let result = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= target) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

let ar = [3, 4, 7, 9, 12, 14, 16, 19, 36, 45, 78];
// console.log(lower_bound(ar, 42));

function lower_bound_recursive(arr, target, low, high, n) {
  let result = n ;
  if (low > high) {
    return result;
  }

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] >= target) {
    result = mid;
    return lower_bound_recursive(arr, target, low, mid - 1, result);
  } else {
    return lower_bound_recursive(arr, target, mid + 1, high, result);
  }
}

//console.log(lower_bound_recursive(ar, 17, 0, ar.length - 1, ar.length));



//upperbound bound : find smallest index of given array i.e arr[index] > num

function upper_bound(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let result = arr.length;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

let arr = [3, 4, 7, 9, 12, 14, 16, 19, 36, 45, 45, 78];
console.log(upper_bound(arr, 45));

function upper_bound_recursive(arr, target, low, high, n) {
  let result = n ;
  if (low > high) {
    return result;
  }

  let mid = Math.floor((low + high) / 2);
  if (arr[mid] > target) {
    result = mid;
    return upper_bound_recursive(arr, target, low, mid - 1, result);
  } else {
    return upper_bound_recursive(arr, target, mid + 1, high, result);
  }
}

console.log(upper_bound_recursive(arr, 36, 0, arr.length - 1, arr.length));

