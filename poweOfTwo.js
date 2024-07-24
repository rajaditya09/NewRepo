function findThePowerOfTwo(num,sum){
   // console.log(sum);
  if(num === sum || num === 1) {res = 0;return ;};
  if(num<sum){res = 1;return ;}
   sum = sum * 2;
  findThePowerOfTwo(num,sum);

  return res;
}
let result = findThePowerOfTwo(1,1);
console.log(result);