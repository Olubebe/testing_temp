  //  Challenge - 2
  
  // Challenge - 2
  
  //  Calculate count, sum and put in an array the even numbers from 1 to a destination. Object keys are count, sum, arrayOfEvenNumbers.
  //  If you did Challenge - 2, remove the comment in the line just after this function
  
  //  @param {Number} destination the stopping number
  //  @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
  
  export default function countEvenNumbersWithin(destination) {
    // Write your code here
    // get the number from 1 to destination
    let sum = 0;
    let count = 0;
    let arrayOfEvenNumbers = [];
   
     for (let i = 1; i <= destination; i++) {
       if (i % 2 === 0) {
         sum += i;
         count++;
         arrayOfEvenNumbers.push(i);
       }
     }
    return {
      // property value shorthand
      // when the property name and the value name are the same
      // you can just write the property name in your object
      count,
      sum,
      arrayOfEvenNumbers,
    };
   }
   
   // step 2
   // if (destination <= 0) {
   //   return {
   //     count: 0,
   //     sum: 0,
   //     arrayOfEvenNumbers: [],
   //   };
   // }
   
   // const evenNumbers = Array.from({ length: destination / 2 }, (_, index) => (index + 1) * 2);
   // const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
   
   // return {
   //   count: evenNumbers.length,
   //   sum: sum,
   //   arrayOfEvenNumbers: evenNumbers,
   // };
    
   //  console.log(countEvenNumbersWithin(13)); 
   
    console.log(countEvenNumbersWithin(10)) // { count: 5, sum: 30, arrayOfEventNumbers: [2, 4, 6, 8, 10] }
   