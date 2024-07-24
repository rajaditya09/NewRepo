
findthepair(  [2,7,11,15],9);
function findthepair(nums,target){
const sumofpair=findtheelement(nums,target);
//console.log(sumofpair[0],sumofpair[1]);
let left =sumofpair[0];
let right=sumofpair[1];
let result=[];
console.log(left,right);
for(let i=0;i<nums.length;i++){
    if(nums[i]===left||nums[i]===right){
        result.push(i);
    }
}
console.log(result);
}


function findtheelement(nums1,target){
    let brr =[];
    for (let x of nums1) {
        brr.push(x);
      }
    brr.sort(function(a,b){ return a-b;})
    //console.log(brr,nums1);

    let arr=[];
    let l =0,r =brr.length-1;
    while(l<r){
        if(target===brr[l]+brr[r]){
            arr.push(brr[l]);
            arr.push(brr[r]);
            return arr;
        }
        if(target>brr[l]+brr[r]){
            l++;
        }
        if(target<brr[l]+brr[r]){
            r--;
        }
    }
    //console.log(arr);
    return arr;
}

