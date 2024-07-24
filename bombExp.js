//function bombExp([[2,1],[2,0]]){
 
function creteMat(n,m){
var arr =new   Array(n);
 for(var i=0;i<m;i++){
      arr[i] = new Array(4);
      arr[i].fill(0);
 }
 return arr;
}
function rowcolcheck(newrow,newcol,a,b)
{
    if(newrow<a&&newcol<b&&newcol>=0&&newrow>=0)
    return true;
    else 
     return false;
}
function bombExp(bomb,a,b){

    const x = [-1, 1, -1, -1, 0, 0, 1, 1];
    const y = [0, 0, 1, -1, 1, -1, 1, -1];
    for(let j=0;j<bomb.length;j++){
        var row=bomb[j][0];
        //console.log(row);
        var col=bomb[j][1];
       // console.log(col);
        arr[row][col]=-1;
      for(let k=0;k<x.length;k++){
            newrow = row + x[k];
           //console.log(newrow);
            newcol =col + y[k];
           // console.log(newcol);
           if(rowcolcheck(newrow,newcol,a,b)==true)
            arr[newrow][newcol]++;
        }

    }
    return arr;
}

var arr=creteMat(4,4);

 console.log(arr);
 arr =bombExp([[2,1],[2,0]],4,4);
 console.log(arr);
 
    


