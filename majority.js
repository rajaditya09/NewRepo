

let nums=[8,8,7,7,7];
let sum=1;
    let ele=nums[0];
    for(let i=1;i<nums.length;i++){
        if(ele===nums[i])
            {
                sum+=1;
            }
        else if(ele!=nums[i]){
            sum -=1;
            console.log(sum);
           }
        if(sum===0){
            ele=nums[i];
            console.log(ele);
        }
    }
    console.log(ele)