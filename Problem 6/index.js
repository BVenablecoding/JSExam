

function firstPunctuationIndex(str) {
    if (typeof str !== 'string') {
      return 'Input must be a string.';
    }
  
    
    const punctuationIndex = str.search(/[.!?]/);
  
    return punctuationIndex;
  }
  
  
  console.log(firstPunctuationIndex('Hello, world! How are you?'));  
  console.log(firstPunctuationIndex('No punctuation here'));  
  console.log(firstPunctuationIndex('Another example.'));  
  
  
  console.log(firstPunctuationIndex(123));  
  