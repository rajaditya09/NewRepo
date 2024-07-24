var tokens = [81,91,31], power = 73;
// let left=0,right=tokens.length - 1;
//     let sakthi=0;
//     if(tokens.length===1){
//         if(tokens[0]>power)
//           console.log(0);  //return 0;
//         else 
//           console.log(1)  //return 1;
        
//     }
//     while(left<right){
//         if(tokens[left]<=power){
//             sakthi++;
//             power = power-tokens[left++] ;
//            //console.log(power);
//             console.log(power,sakthi); 
//             // if(power >tokens[left]){
//             // power = power-tokens[left++] ;
//             // sakthi++;
//          // }
//         }
       
//        if(left>right)break;

//         if(power<tokens[left] && sakthi>0 ){
//             sakthi--;
//             power = power+tokens[right--] ;
//         }
//     }
//     console.log(sakthi);
var tokens = [100,200,300,400], power = 200;
tokens.sort(function(a,b){return a-b;});
    let left=0,right=tokens.length - 1;
    let sakthi=0;
    if(tokens.length===1){
        if(tokens[0]>power)
          console.log(0);  
        else 
       console.log(1)  
        
    }
    if(tokens[0]>power)console.log(0);
    while(left<=right){
        if(tokens[left]<=power){
            sakthi++;
            power = power-tokens[left++] ;
            console.log(power,sakthi); 
           }
          else {
                 if(power+tokens[right]>=tokens[left]&&sakthi>0&&left!=right){
                    sakthi--;
                    power = power+tokens[right--] ;
                }
                else break;
            }
    }
  console.log(sakthi);