function rainWaterTrap(Arr){

    Arrlength=Arr.length;
    let Larr=[],Rarr=[];
   let  Arrmax =Arr[0]; 
    Larr[0]=0;
    for(let i=1;i<Arrlength;i++){
       if(Arr[i]>Arrmax){
           Arrmax=Arr[i];
       }
       Larr[i]=Arrmax;   
    }
    console.log(Larr);

    Arrmax=Arr[Arrlength-1]
    for(let j=Arrlength-2;j>=0;j--){
        if(Arr[j]>Arrmax){
            Arrmax=Arr[j];
        }
        Rarr[j]=Arrmax;
    }
    console.log(Rarr);
    let product=0;
    let newArr=[];
       let sum=0;
    for(let a=0;a<Arrlength;a++){
          sum = (Larr[a]>=Rarr[a]?Rarr[a]:Larr[a])-Arr[a];
          newArr[a]=sum;
          if(sum>0)
          product+=sum;
    }
    console.log(newArr);
    console.log(product);
}

// rainWaterTrap([7,4,3,1,6,8,9,1,11]);
// rainWaterTrap([3,0,2,0,4]);
rainWaterTrap([3,0,3]);