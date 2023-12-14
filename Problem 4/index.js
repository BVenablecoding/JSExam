

function averageStringLength(arr) {
    if (!Array.isArray(arr)) {
      return 'Input must be an array of strings.';
    }
  
    
    const sumLengths = arr.reduce((acc, str) => acc + str.length, 0);
  
        const averageLength = arr.length > 0 ? sumLengths / arr.length : 0;
  
    return averageLength;
  }
  
  
  console.log(averageStringLength(['apple', 'banana', 'orange']));  
  console.log(averageStringLength(['cat', 'dog', 'fish'])); 
  console.log(averageStringLength([]));  
  
  
  console.log(averageStringLength('invalid'));  
  