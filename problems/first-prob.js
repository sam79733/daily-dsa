// find a element in a sorted array


function isNumberAvailable(number, arr)
{
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == number) return true;
    }
    return false;
}

let number = 5;
let numberArray = [1,2,3,4,5,6,7,77,88,90];
console.log(isNumberAvailable(number, numberArray));


// Using binary search

function isNumberAvailableBinarySearch(number, arr)
{
    let middle = arr.length / 2;
        while(middle)
        {

        }
}