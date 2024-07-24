let nums = [5,1,6];
function Xorsum(nums,index,numslist){
    let sum =0;
    if(nums.length===index){
        sum = sum + calculateSum(numslist);
        return ;
    }
    numslist.push(nums[index]);
    Xorsum(nums,index,numslist)
    numslist.pop();
    Xorsum(nums,index,numslist)
}
function calculateSum(numslist){
    let sum =0;
    for(let i=0;i<numslist.length;i++){
        sum =sum ^ numslist[i];
    }
    return sum;
}