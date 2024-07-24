
function partation(arr,low,high){
 let pivot=arr[low];
 let i=low;
 let j=high;
  while(i<j){
          do{
              i++;
             }while(arr[i]<pivot);
           do{
               j--;
             }while(arr[j]>pivot)
            if(i<j){
              swap(arr,i,j);
            }
        
    }
    swap(arr,low,j);
    return j;
}

function sortQuick(arr,low,high){
  if(low<high){
      j=partation(arr,low,high);
      sortQuick(arr,low,j);
      sortQuick(arr,j+1,high);
  }

}
const arr = [4,7,1,8,11,33,8,0,2,1];
sortQuick(arr,0,arr.length);
console.log(arr);















//=============================RELEVEL CLASS=====================================================




// const arr = [8, 2, 1, 9, 7, 8];
// //console.log(countInversions(arr));


// function quicksort(arr, low, high) {
//     if(low >= high) {
//         return;
//     }
//     const pivot = parition(arr, low, high);
//     quicksort(arr, low, pivot - 1);
//     quicksort(arr, pivot + 1, high);
// }

// //[6, 5, 4, 3, 2], 7, [9, 8, 10]
// //[2, 5, 4, 3, 6], 7, [9, 8, 10]
// //[2, 5, 4, 3], 6, 7, [9, 8, 10]
// //2, [5, 4, 3], 6, 7, [9, 8, 10]
// //2, [3, 4], 5, 6, 7, [9, 8, 10]
// //2, 3, [4], 5, 6, 7, [9, 8, 10]
// //2, 3, 4, 5, 6, 7, [9, 8, 10]
// //2, 3, 4, 5, 6, 7, [8], 9, [10]
// //2, 3, 4, 5, 6, 7, 8, 9, [10]
// //2, 3, 4, 5, 6, 7, 8, 9, 10

// function parition(arr, low, high) {
//     const pivot = low;
//     let indexOfLastSmallerElement= low;
//     for(let j = low + 1; j <= high; j++) {
//         if(arr[j] <= arr[pivot]) {
//             indexOfLastSmallerElement++;
//             if(indexOfLastSmallerElement !== j) {
//                 swap(arr, indexOfLastSmallerElement, j);
//             }
//         }
//     }
//     swap(arr, indexOfLastSmallerElement, pivot);
//     return indexOfLastSmallerElement;
// }

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
// quicksort(arr, 0, arr.length-1);
// console.log(arr);