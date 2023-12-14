

function addToObj(person, key, value) {
    
    if (typeof key !== 'string') {
      console.log('Function must be called with a valid key.');
      return;
    }
  
    
    person[key] = value;
  }
  
  // Exsample
  const personObject = {
    name: 'John',
    age: 30,
  };
  
  addToObj(personObject, 'occupation', 'Engineer');
  console.log(personObject); 
  
  addToObj(personObject, 123, 'InvalidKey');
  
  console.log(personObject); 
  
