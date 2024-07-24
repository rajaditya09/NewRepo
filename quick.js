function partation(arr,low,high){
    let i=low;
    let j=high;
    let pivot=arr[low];
    while(i<j){
        do{
         i++;
        }while(arr[i]<pivot)
        do{
         j--;
        }while(arr[j]>pivot)
        if(i<j)
      swap(arr,i,j);
    }
    swap(arr,low,j);
    return j;

}
function quicksor(arr,low,high)
{
    if(low<high){
        let j=partation(arr,low,high);
        quicksor(arr,low,j);
        quicksor(arr,j+1,high);
    }

}
const arr = [4,7,1,8,11,33,8,0,2,1];
quicksor(arr,0,arr.length);
console.log(arr);


function swap(arr,a,b){
    let temp= arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}