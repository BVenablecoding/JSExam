

function numOddValues(arr) {

function numOddValues(arr) {
  if (!Array.isArray(arr)) {
    return 'Input must be an array.';
  }

  
  const countOdd = arr.reduce((acc, num) => acc + (num % 2 !== 0 ? 1 : 0), 0);
  return countOdd;
}
}

console.log(numOddValues([0, 1, 2, 3]));  
console.log(numOddValues([5, 5, 5, 5])); 
console.log(numOddValues([]));            


console.log(numOddValues('invalid'));
