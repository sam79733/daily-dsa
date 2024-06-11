//Iterative
function isNumberAvailable_Interative(number, arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] === number) {
      return true;
    }

    number < arr[mid] ? (high = mid - 1) : (low = mid + 1);
  }

  return false;
}

// Recursion

function isNumberAvailable_recursive(number, low, high, arr) {
  if (low > high) return false;

  let mid = Math.floor((low + high) / 2);

  if(arr[mid] === number) return true;
  if(number < arr[mid]){
    return isNumberAvailable_recursive(number, low, mid -1, arr);
  }
  else
  {
    return isNumberAvailable_recursive(number, mid +1 , high, arr)
  }
    
}

let arr = [2, 8, 10, 15, 19, 29, 30, 43, 55];

console.log(isNumberAvailable_recursive(2, 0, arr.length - 1,  arr));
