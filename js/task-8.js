function reduceArray(array) {
    'use strict';
    let total = 0;
    // Write code under this line
    for(let i=0; i<array.length; i++) {
      total += array[i];
    } 
    return total;
  };
  
  console.log(reduceArray([1, 2, 3]));
  // 6
  
  console.log(reduceArray([-2, 0, 2]));
  // 0
  