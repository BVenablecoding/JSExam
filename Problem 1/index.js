// index.js

function ageToAbilities(age) {
    if (typeof age !== 'number' || age < 0) {
      return 'Age must be a non-negative number.';
    }
  
    if (age <= 5) {
      return 'Too young for abilities.';
    } else if (age <= 12) {
      return 'Can play and have fun.';
    } else if (age <= 19) {
      return 'Can attend school and engage in sports.';
    } else if (age <= 65) {
      return 'Can work and participate in community activities.';
    } else {
      return 'Enjoy retirement!';
    }
  }
