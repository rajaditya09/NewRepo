function bubbleSort(arr){

    for(let i=0;i<arr.length;i++){
      if(!compareAdjcent(arr,i))
      {
          break;
      }
    }
    return arr;

}
function compareAdjcent(arr,i){
    var flag= false;
for(let j=0;j<arr.length-1-i;j++){
    
    if(arr[j]>arr[j+1]){
        let temp =arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
        flag = true;
    }
}
    return flag;
}
console.log(bubbleSort([9,1,4,3,8,12,3,71]));

function towerOfH(numofring){
    
}