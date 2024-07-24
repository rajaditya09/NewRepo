
// let Array=[1,2,3,4,5,6];
// Array.fill(2,1,3);
// console.log(Array);

// let Arr=[];
// console.log(Arr.pop());
//------------------------------------
// const course={
//    name :'javascript',
//    id:1
// }
// const newCourse = course;
// newCourse.id=2;
// console.log(newCourse.id);

//---------------------------------------------------
// const course={
//     name :'javascript',
//     id:1
//  }
//  const newCourse = {...course};
//  newCourse.id=2;
//  console.log(course.id);
//-------------------------------------- MAP -----------------------
// const arr=[19,92,4,83,93,92];
// let brr=arr.map(element=>element*2);
// console.log(brr);

//----------------------------------------FILTER--------------------------------------
// function isEven(number){
//     return number%2===0;
// }
// const crr=[18,27,45,98,100,67,89,88];
// const newArr=crr.filter(isEven);
// console.log(newArr);
//----------------------------------For Each Loop---------------------------------------
// const arr=[1,2,3,4,5,,6];
// arr.forEach(printfun);
// function printfun(num)
// {
//     console.log(num);
// }
//------------------------------Reduce Method ---------------------------------------------------------
// const arr=[1,2,3,4,5,,6];
// const totalsum=arr.reduce(function(sum,curr){
//     sum+=curr;
//     return sum;
// },0)
// console.log(totalsum);     //21
//------------------------------Max number------------------------------------
// const arr=[1,2,3,4,5,,6];
// const max=arr.reduce(function(maxnum,curr){
//       if(maxnum<curr)maxnum=curr;
//       return maxnum;
// },0)
// console.log(max);
//===========================
// const Arrays = [2,3,4];
// const nArray=Arrays.reduce(function(product,curr){
//          product *= curr;
//          return product;
// },1)
// console.log(nArray)
//==============================================
// const Arr=[];
// Arr.push([1,2,3,4,6]);
// Arr.push(['ADITYA','RAJ','AMRIT','RAJ']);
// console.log(Arr);

//===========================================================
// MAP function in java script

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);


const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
fruits.set(80,90);
console.log(fruits);
console.log(fruits.get('apples'));
console.log(fruits.get(80));
fruits.set(80,'Doggy');
console.log(fruits.get(80));
console.log(fruits.size);
fruits.delete("apples");
console.log(fruits.has("apples"));

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value +"\n";
  
})
console.log(text);

// List all entries
let text1 = "";
for (const x of fruits.entries()) {
  text1 += x + "    ";
 
}
console.log(text1);

if(fruits.has('apples')){
fruits.set('apples',1000);
}
else fruits.set('apples',1000);
console.log(fruits.get('apples'));



const stringA='Aditya';
const strobj={};
for(let i=0;i<stringA.length;i+=){
    st
}