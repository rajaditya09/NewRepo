function  subSequence(index,Arr,subSequenceArray,resultsubarray){
    let Arrsize=3;
    if(index==Arrsize){
      console.log(subSequenceArray);
      resultsubarray.push(subSequenceArray);
     
      //resultsubarray.push(new Array(subSequenceArray));

      //console.log(`after${resultsubarray}`);
      return  ;
    }
   // console.log(Arr);
    subSequenceArray.push(Arr[index]);
    //console.log(subSequenceArray);
    subSequence(index+1,Arr,subSequenceArray,resultsubarray);
    subSequenceArray.pop();
    subSequence(index+1,Arr,subSequenceArray,resultsubarray);
  // return resultsubarray;
}

var resultsubarray=[];
let subSequenceArray=[];
subSequence(0,[1,2,3],subSequenceArray,resultsubarray);
console.log(resultsubarray);





















// function  subSequence(index,Arr,subSequenceArray,resultsubarray){
//   let Arrsize=3;
//   if(index==Arrsize){
//     console.log(subSequenceArray);
//    // resultsubarray.push(subSequenceArray);
//     return 0 ;
//   }
//  // console.log(Arr);
//   subSequenceArray.push(Arr[index]);
//   //console.log(subSequenceArray);
//   subSequence(index+1,Arr,subSequenceArray,resultsubarray);
//   subSequenceArray.pop();
//   subSequence(index+1,Arr,subSequenceArray,resultsubarray);

// }
// let resultsubarray=[];
// let subSequenceArray=[];
// subSequence(0,[1,2,3],subSequenceArray,resultsubarray);
// //console.log(resultsubarray);