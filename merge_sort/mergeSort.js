// if the array we're looking at contains a single element, it's sorted
// return it, because it's already sorted
// recursive case:

// select the entire array of unsorted numbers
// using the .split function, divide the array into two halves
// select the left subarray
// divide that array until there is only length of 1 in each array, 
// once it is singular, it is ready to be sorted and combined using .mergeSort function
// add the selected values from minimum value to higher values to the sorted array
// do the same to the right subarray
// when one list becomes empty, copy all values from the remaining array into the sorted array

// split is a function that takes an array and divides it into two arrays
// of the same size (or as close as possible), then returns those two arrays 
// determine the halfway point (array.length/2)
// divide the orriginal array into two arrays
// return the left and right arrays (return might need to be structured)

// merge is a function that takes two already sorted arrays and combines them
// into one array that is in sorted order
// create a new results array to return in the end 
// compare the first items in either array. Add the smaller one to the results array.
// leave the larger one where it is
// keep comparing the first items until one of the two original arrays is empty
// add the remaining items from the non-empty array to the end of the results array

//FIRST SOLUTION
function mergeSort(arr, fun) {
    if (arr.length <= 2){
        arr=arr.sort((a,b) => a-b);
        return arr;
    } else {
        const arrleft= arr.slice(0,arr.length/2);
        console.log("left", arrleft);
        mergeSort(arrleft, fun);
        const arrright= arr.slice(arr.length/2, arr.length);
        console.log("right", arrright);
        mergeSort(arrright, fun);
        arr = [... arrleft, ...arrright];
        arr= arr.sort((a,b) => a-b);
        fun(arr);
    }
}
arr = [3,4,2,1,8,9,6]
const result = [];
mergeSort(arr,(val) => {
    result.push(val);
});
console.log(arr);
console.log(result[result.length-1]);

//ELLENS SOLLUTION


const array = [4,1,12,43,56,76]
console.log(mergeSort(array))


const splitArray = (arrayToSplit) => {
    const halfwayIndex = Math.floor(arrayToSplit.length/2)
    const leftArray = arrayToSplit.slice(0, halfwayIndex)
    const rightArray = arrayToSplit.slice(halfwayIndex)
    return [leftArray, rightArray]
}

const mergeSortedArrays = (leftArray, rightArray) => {
    const mergedArray=[]
    while (leftArray.length>0 && rightArray.length>0){
    const firstItemLeft = leftArray[0]
    const firstItemRight = rightArray[0]
    if (firstItemLeft<firstItemRight) {
        mergedArray.push(firstItemLeft)
        leftArray.shift()
     } else {
        mergedArray.push(firstItemRight)
        rightArray.shift()
     }
    }
    return mergedArray.concat(leftArray).concat(rightArray);
}
const mergeSort= (unsortedArray) => {
    if (unsortedArray.length < 2) {
        return unsortedArray;
    }


const [left, right] = splitArray(unsortedArray)
const sortedLeft = mergeSort(left)
const sortedRight = mergeSort(right)

return combinedSortedArray = mergeSortedArrays(sortedLeft, sortedRight)
}