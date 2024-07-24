let nums = [1];
let k=0;
let mapArr = new Map();
    mapArr.set(0,1);
    
    let sum =0;
    let count =0;
    for(let i=0;i<nums.length;i++){
        sum += nums[i];
        
        //console.log(sum);
        if(mapArr.has(sum-k)){
            count += mapArr.get(sum-k);
        }
        mapArr.set(sum,mapArr.get(sum)+1 || 1);
    }
    //console.log(mapArr.has(3));
    
    // mapArr.forEach((values,keys)=>{
    //     console.log(keys,values);
    // })
    // mapArr.forEach((values,keys)=>{
    //     //console.log(mapArr.has(keys-k))
    //     if(mapArr.has(keys-k)){
    //         count += values;
    //        // console.log(count);
    //     }
    // })
console.log(count);