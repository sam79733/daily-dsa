// find a element in a sorted array

const isNumberEvenOrOdd = (num) => {
  return num % 2 == 0 ? 'even' : 'odd';
};

function isNumberAvailable(number, arr) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == number) return true;
  }
  return false;
}

let number = 5;
let numberArray = [1, 2, 3, 4, 5, 6, 7, 77, 88, 90];

// Using binary search

function isNumberAvailableBinarySearch(number, arr) {
  let middle = arr.length / 2;
  while (middle) {}
}

console.log(isNumberEvenOrOdd(24));
