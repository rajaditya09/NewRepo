function subSeqSum(index,Arr,Arrlist,sum){
    let  sumlist =  sumArrlist(Arrlist);
    if(index==Arr.length){
        if(sum==sumlist){
            console.log(Arrlist);
            return true ;
        }
         else return false;
    }
    Arrlist.push(Arr[index]);
   if(subSeqSum(index+1,Arr,Arrlist,2)==true){return true};
    Arrlist.pop();
    if(subSeqSum(index+1,Arr,Arrlist,2)==true){return true};

    return false;
}
function sumArrlist(Arrlist){
    let sumation =0;
    for(let i=0;i<Arrlist.length;i++){
       sumation = sumation + Arrlist[i];
    }
    return sumation;
}
let Arrlist=[];
let callthefun=subSeqSum(0,[1,2,1],Arrlist,2);