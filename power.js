// function powerOfNumber(num,pow){
//     if(pow==0)
//     return 1;
//   result= num *  powerOfNumber(num,pow -1);
//   return result
// }
// let result=0;
// console.log(powerOfNumber(2,3));


function powerOfNumber(num,pow){
    if(pow==0)
    return 1;
  result= num *  powerOfNumber(num,pow/2);
  return result;
}
let result=0;
console.log(powerOfNumber(2,4));