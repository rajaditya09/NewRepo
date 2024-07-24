

//let height = [1,8,6,2,5,4,8,3,7];
let height =[1,1];
let maxStore=-Infinity;
    let l=0,r=height.length-1;
    let pt=height.length-1;
    while(l<r){
        let calc=0;
        if(height[l]<=height[r]){
           
            calc= pt * height[l];
                 l++;
        }
        else{
            calc=pt * height[r] ;
                 r--;
        }
        pt--;
        
        if(maxStore<calc){
            maxStore=calc;
        }
    }
    console.log(maxStore);



    let foo=0;
    console.log(++foo,foo++);
    console.log(++foo);