

  
  
  //  Challenge - 1
  
  //  Calculate and return the sum of the numbers between 1 and a destination.
  //  (1 to destination) where destination is a number greater than 1 and destination  is inclusive when calculating the sum.
  
  //  If you did Challenge - 1, remove the comment in the line just after this function
  
  //  @param {Number} destination is the stopping number
  //  @returns number the sum of the numbers from 1 to destination

  

  export default function sumOfNumbersTo(destination) {
    // step 1
  //   if statement to check if destination is greater than 1
    if (destination === 1){
        return 1
    } else if (destination < 1) {
     return 0
     }
    // use recursion to call the function again
    return destination + sumOfNumbersTo(destination - 1)
    // step 2
    // let sum = 0;
    //  for (let i = 1; i <= destination; i++) {
    //   sum += i;
    //  }
    //     console.log(sum);
    //  return destination;
    
    //  console.log(sumOfNumbersTo(10));
    //step 3
    // find the first natural number
  //    if (destination === 1) {
  //        return 1
  //      } else if (destination < 1) {
  //        return 0
  //     }
  //     return destination * (destination + 1) / 2
  }
  
  console.log(sumOfNumbersTo(10));
  

  
  
  