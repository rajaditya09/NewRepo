function combination(index,Arr,result,subSeqArr,resArr){

    if(result == 0){
        resArr.push(subSeqArr);
       console.log(subSeqArr);
        return  ;
    }
    for(let i=index;i<Arr.length;i++){
        if(i>index && Arr[i]===Arr[i-1]){continue;}
        if(Arr[i]>result){break;}

        subSeqArr.push(Arr[i]);
        //console.log(subSeqArr);
        combination(i+1,Arr,result-Arr[i],subSeqArr,resArr);
        subSeqArr.pop();

    }
    
} 
let subSeqArr=[];
let resArr=[];
let Trr=[10,1,2,7,6,1,5];
let Mrr=Trr.sort(function(a, b){return a-b});
// console.log(Mrr);
combination(0,Mrr,8,subSeqArr,resArr);
console.log(resArr);