let Arr=[1,2,3];
let Brr= new Array(Arr.length);
Brr=Brr.fill(0);
let Crr = [];
let Ansarr =[] ;

let newArr=permudationFun(Arr,Brr,Ansarr,Crr);
function permudationFun(Arr,Brr,Ansarr,Crr){

    if(Crr.length === Arr.length){
        console.log(Crr);
        Ansarr.push(Crr);
        //console.log(Ansarr[0]);
        return;
    }

    for(let i=0;i<Arr.length;i++){
        if(Brr[i]===0){
            Brr[i]=1;
            Crr.push(Arr[i]);
            permudationFun(Arr,Brr,Ansarr,Crr);
            Crr.pop();
            Brr[i]=0;
        }
    }
    
    return Ansarr;
}
 console.log(newArr);
