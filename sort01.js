function sortingArray(Arr){
    let arrLength=Arr.length;
   
    for(let i=0;i<arrLength-1;i++){
        let minIndex =i;
        for(let j=1+i;j<arrLength;j++){
            
          if(Arr[minIndex]>Arr[j])
          minIndex = j;

        
        }
        if(minIndex!=i){
//   swapTheNumber(Arr,Arr[minIndex],Arr[j]);
        Arr[i]=Arr[i]^Arr[minIndex];
        Arr[minIndex]=Arr[i]^Arr[minIndex];
        Arr[i]=Arr[i]^Arr[minIndex];
        }
    }
}
// function swapTheNumber(arr,num1,num2){
//     num1=num1^num2;
//     num2=num1^num2;
//     num1=num1^num2;
// }
let stt=[1,33,78,-10,78,90];
sortingArray(stt);
console.log(stt);
