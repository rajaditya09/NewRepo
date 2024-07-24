
function makearr(row,col){
    var arr = new Array(row);
    count=0;
    for(let k=0;k<row;k++){
         arr[k] =new Array(col);     
    }
    for(var i=0;i<arr[0].length;i++){
        for(var j=0;j<arr[0].length;j++){
            arr[i][j]=count++;
        }
    }
   return arr;
}
function trans(arr,brr){

    for(var i=0;i<4;i++){
        for(j=0;j<4;j++){
            brr[i][j]=arr[j][i]
        }
    }
    console.log(brr);
}
let arr=makearr(4,4);
console.log(arr);
 var brr=[];
 trans(arr,brr);

