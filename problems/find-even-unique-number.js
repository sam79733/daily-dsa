// we have array of number find out first unique even number
// [1,2,3,2,2,4,5,6,8,4] --> output 6

// Improved function to find the first unique even number in an array
const findFirstUniqueEvenNumber = (arr) => {
  const countMap = new Map();

  // First pass: Count occurrences of each even number
  for (const num of arr) {
    if (num % 2 === 0) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  }

  // Second pass: Find the first even number with a count of 1
  for (const num of arr) {
    if (num % 2 === 0 && countMap.get(num) === 1) {
      return num;
    }
  }

  return -1; // Return -1 if no unique even number is found
};

// Example usage
let arr = [1, 2, 3, 2, 2, 4, 5, 6, 8, 4];
console.log(findFirstUniqueEvenNumber(arr)); // Output: 6
