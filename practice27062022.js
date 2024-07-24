const foo = function xyz(){
console.log(xyz);
console.log("svavssvsbxksbx");
};
 foo();
 //xyz();// ReferenceError: xyz is not defined

 const arr =[1,2,3];
 console.log(arr);
 const arrobj ={
    0:1,
    1:2,
    2:3
 };
 console.log(arrobj);
 console.log(typeof(arr));
 console.log(typeof(arrobj));
 console
 .log(Array.isArray(arrobj));
 console.log(Array.isArray(arr));


 const bioData =
 {
    name :"Aditya",
    age : "22",
    degree: "B.tech",
    org:"Amdocs"
 }

 const {name,age,degree,org}=bioData;
 console.log(`My name is ${name}.my age is ${age}.i have done ${degree} And right now i am working with ${org}`);


 function fun(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(c[0]);
    console.log(c[0].length);
    console.log(c.length);

 }
 fun('Aditya','Raj','RAja','Rajeev','Kumar');