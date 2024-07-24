const Arr=[1,2,3,4,5,6,7,8,9,10];
 var newArr = new Array(5);
 for(let i=0;i<2;i++){
     newArr[i] = new Array(5);
     newArr[i].fill(0);

 }
console.log(newArr);

var z=0;
var row=newArr.length;
var col=newArr[0].length;
 for(var x=0;x<2;x++){
  for(var y=0;y<5;y++){
      let num= Arr[z++];
      newArr[x][y]=num;
  } 
 }

 console.log(newArr);
