let arr = [99,1,1,6,8,3,97,113,9];
//console.log(arr);
//===================Merge Sort===========================
function mergeSort(arr,left,right){ 
    if(left<right){
        let mid = parseInt((left+right)/2);
        mergeSort(arr,left,mid);
        mergeSort(arr,mid+1,right);
        merge(arr,left,mid,mid+1,right);}
    }
function merge(arr,i1,i2,j1,j2){
    let i=i1;let j=j1;let k=0;
    let result=[];
    while(i<=i2 && j <= j2){
        if(arr[i]>arr[j]){
            result[k++]=arr[j++];
        }
        else{
            result[k++]=arr[i++];
        }
    }
    while(i<=i2){
       result[k++]=arr[i++];
    }
    while(j<=j2){
        result[k++]=arr[j++];
    }
   
    for(i=i1,j=0;i<=j2;i++){
        arr[i]=result[j++];
    }
}
console.log(`Merge SORT ARRAY befor sort ${arr}`);
mergeSort(arr,0,arr.length-1);
console.log(arr);



///=======================Quick Sort================================
function quickSort(arr,l,r){
    if(l<r){
        let p= partation(arr,l,r);
        quickSort(arr,l,p);
        quickSort(arr,p+1,r);
    }
}
function partation(arr,l,r){
    let pivot = arr[l];
    let i = l;
    let j =r;
    while(i<j){
     do{
      i++;
     }while(arr[i]>=pivot)
     do{
        j--;
       }while(arr[j]<pivot)
      if(i<j)
      swap1(arr,i,j);
    }
    swap1(arr,l,j);
    return j;
}
function swap1(arr,a,b){
    let temp =arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
}

let arr1=[57,38,91,10,38,28,79,41];
console.log(`Quick SORT ARRAY before sorting ${arr1}`);
quickSort(arr1,0,arr1.length);
console.log(arr1);
////=========================Bubble Sort=========================================
let arr3=[57,38,91,10,38,28,79,41];
console.log(`BUBBLE SORT ARRAY ${arr3}`);
function bubbleSort(arr3){
    for(let i=0;i<arr3.length;i++){
        if(!(swapthearr(arr3,i)))
         break;
    }
}
    function swapthearr(arr3,i){
         var flag= false;
        for(let j=0;j<arr3.length-1-i;j++){
          if(arr3[j]>arr3[j+1]){
            swap1(arr3,j,j+1);
            flag=true;
          }
        }
        return flag;
    }
    bubbleSort(arr3);
    console.log(arr3);


//=====================Selction Sort========================================================

let arr4=[57,38,91,10,38,28,79,41];
function SelctionSort(arr4){
    for(let i=0;i<arr4.length-1;i++){
        let min =i;
        for(let j=1+i;j<arr4.length;j++){
            if(arr4[min]<arr4[j]){
                min=j;
            }
        }
        swap1(arr4,i,min);
    }
}
console.log(`Selection SORT ARRAY ${arr4}`);
SelctionSort(arr4);

console.log(arr4);


//  https://leetcode.com/problems/subarray-sum-equals-k/
//  https://leetcode.com/problems/subarray-sums-divisible-by-k/