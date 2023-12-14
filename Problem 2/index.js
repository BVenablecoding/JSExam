
function oddIndices(arr) {
    if (!Array.isArray(arr)) {
      return 'Input must be an array.';
    }
  
    
    const result = arr.filter((value, index) => index % 2 !== 0);
    return result;
  }
  
  
  console.log(oddIndices([1, 2, 3, 4, 5, 6]));  
  console.log(oddIndices(['a', 'b', 'c', 'd']));  
  console.log(oddIndices([]));  
  
  
  console.log(oddIndices('invalid'));  
  