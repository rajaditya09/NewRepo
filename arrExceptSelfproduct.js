function arrExceptSelfProduct(Arr){
    let Larr=[],Rarr=[];
    Larr[0]=1;
    let product=1;
for(let i=1;i<Arr.length;i++){
  product*=Arr[i-1];
  Larr[i]=product;
}
console.log(Larr);
product=1;
Rarr[Arr.length-1]=1;
for(let j=Arr.length-2;j>=0;j--){
    product*=Arr[j+1];
    Rarr[j]=product;
}
console.log(Rarr);

for(k=0;k<Arr.length;k++)
{
    Arr[k]=Larr[k]*Rarr[k];
}
console.log(Arr);
}
let Arrin=[1,2,3,4];
console.log(Arrin);
let rArr=arrExceptSelfProduct(Arrin);
//console.log(rArr);
