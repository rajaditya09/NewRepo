const arr=[1,2,3,4,5,6,7,8,1,2];

const removeduplicate= new Set(arr);
// const neweArr = [...removeduplicate];
// console.log(neweArr);

// const theobject={};
// for(let i=0;i<arr.length;i++){
//     let newNum = arr[i];
//     theobject[i]=theobject[i]+1||1;   
// }
// console.log(theobject);

let input=[1,2,3,4,5,6,1,2,3,6,2,99];
//uniqueElementSumUsingMap(input);
// function uniqueElementSum(input){
//     let sum = 0;
//     let cnt = [];
//     cnt.length = 101;
//     for(let i = 0; i < input.length; i++) {
//     if(cnt[input[i]] == undefined) {
//     cnt[input[i]] = 1;
//     } else {
//     cnt[input[i]]++;
//     }
//     }
//     console.log(cnt);
//     for(let i = 0; i < input.length; i++) {
//     if(cnt[input[i]] == 1) {
//     sum += input[i];
//     }
//     }
//     console.log(sum);
//     return sum;
//     }
//[1,2,3,4,5,6,1,2,3,6,2,99]


//------------------------------use of map dunction  in java script


// function uniqueElementSumUsingMap(input1){
//     const setValue = new Map();
//     //console.log(input1.length);
//     for(let i=0;i<input1.length;i++){
//         setValue.set(input1[i],setValue.get(input1[i])+1||1);
            
//                    // console.log(setValue.get('apples'));
      
//     }
//     let sum=0;
//     setValue.forEach((values,keys)=>{
//     if(values===1)
//      sum+=keys;
//     })
//     console.log(sum);
//    console.log(setValue);
// }


let arr1=[1,22,2,33,4,33,4,33,6,77,8];
let newMap= new Map();
for(let i=0;i<arr1.length;i++){
  newMap.set(arr1[i],newMap.get(arr1[i])+1||1);
}

console.log(newMap);
newMap.forEach((values,keys)=>console.log(`${keys}====>${values}`));
console.log(newMap.get(33));
console.log(newMap.has(33));

var map3 = new Map([["whole numbers", [1 ,2 ,3 ,4]],
            ["Decimal numbers" , [1.1, 1.2, 1.3, 1.4]],
            ["negative numbers", [-1, -2, -3, -4]]]);
  
console.log("Map3");
console.log(map3);
