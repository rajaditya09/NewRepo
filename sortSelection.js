function selection(arr){
    for(let i=0;i<arr.length-1;i++){
        let minIndex = findMinOfIndex(arr,i);
        swapthenumber(arr,i,minIndex);

    }
    return arr;
}
function findMinOfIndex(arr,i){
    let min = i;
    for(let j=1+i;j<arr.length;j++){
        if(arr[min]>arr[j]){
            min = j;
        }
    }
    return min;
}
function swapthenumber(arr,i,minIndex){
//  let   temp=arr[i];
//     arr[i]=arr[minIndex];
//     arr[minIndex] =temp;

//    arr[i]= arr[i] ^ arr[minIndex];
//    arr[minIndex]= arr[i] ^ arr[minIndex];
//    arr[i]= arr[i] ^ arr[minIndex];

x =arr[i];
y=arr[minIndex];
x= x^y;
y= x^y;
x= x^y;
arr[i]=x;
arr[minIndex]=y;



    return arr;
}
console.log(selection([9,1,4,3,8,12,3,71]));