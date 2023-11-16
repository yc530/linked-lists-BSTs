// fibonacci should take a positive integer `n` and return the `n`th number in the fibonacci sequence

// create our cache (outside of the function)

// base cases
  // if n === 1, fibonacci number is 0
  // if n === 2, fibonacci number is 1

// recursive case
  // check our cache to see if we've solved this problem already
    // if we have, return the cached answer
  // calculate the sum of the last two fibonacci numbers (call fibonacci recursively)
  // store the result in our cache
  // return the result


const cache = {
    0:0,
    1:1
};
const fibonacci = (n) => {
    if (cache[n] !== undefined){
        return cache[n]
    }
//   if (n === 1) 
//   return 0;
//   if (n === 2) 
//     return 1;
  
const sumOfLastTwo = fibonacci(n - 1) + fibonacci(n - 2);
cache[n] = sumOfLastTwo

  return sumOfLastTwo;
}
///
const result = [];
console.log(
  fibonacci(8)
);
console.log(cache);

