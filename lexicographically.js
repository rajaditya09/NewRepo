  function getSmallestString(n, k) {
    let  newk= k - n;
    let str = 'abcdefghijklmnopqrstuvwxyz';
    let newArr = str.split("");
    let newBrr =[];
 //  console.log(newArr);
    for(let i=0;i<n;i++){
            newBrr[i]=0;
        }
      // console.log(newBrr);
    for(let j=n-1;j>=0;j--) {
            if(newk <= 25){
                newBrr[j] = newBrr[j] + newk;
            break;
         }
             
             newBrr[j]=  newBrr[j] + 25;
             newk = newk - 25;
    }
      let newChar ='';
      for(let i=0;i<n;i++)
      {
          newChar = newChar + str[newBrr[i]];
      }
      console.log(newBrr);
     console.log(newChar);
    
};
getSmallestString(3,27);