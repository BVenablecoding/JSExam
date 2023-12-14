

function duplicateElements(arr) {
    if (!Array.isArray(arr)) {
      return 'Input must be an array.';
    }
  
    
    const result = arr.filter((value, index, self) => self.indexOf(value) !== index);
  
    
    const uniqueResult = [...new Set(result)];
  
    return uniqueResult;
  }
  
  
  console.log(duplicateElements([1, 2, 3, 4, 1, 5, 6, 2]));  
  console.log(duplicateElements([3, 7, 8, 3, 9, 10]));  
  console.log(duplicateElements([11, 12, 13, 14])); 
  
  
  console.log(duplicateElements('invalid'));  
  