function binarySearch(nums,target,low,high){
    if(low<=high){
    let mid = parseInt((low+high)/2);
    //console.log("=================");
    //console.log(nums[mid]);
    if(nums[mid] == target){
        
        return mid ;
    }
    if(nums[mid]<target){ 
        low = mid + 1;
     } 
     else{
        high = mid-1;
    }
    //console.log(low,mid)
    
   return binarySearch(nums,target,low,high);
    }
    return -1;
}
let nums = [-1,0,3,5,9,12], target = 9;
let answer = binarySearch(nums,target,0,nums.length-1);
console.log(answer);



