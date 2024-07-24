// sortcut way to merge two sorted array

// var sort1=[1,22,43,12,48];
// var sort2=[67,78,45,89];
// var sort3=sort1.concat(sort2);
// sort3.sort(function(a,b) {return(a-b);});
// console.log(sort3);


//correct way 
var sort1=[1,12,22,43,48];
var sort2=[3,4,45,89];
var  res=[];
var finallength= sort1.length + sort2.length;                                                                                               
function mergetwoarr(sort1,sort2,res,finallength){
    var i=0; k=0,j=0;
    while(k<sort1.length||j<sort2.length){
        if(sort1[k]<sort2[j]){
            res[i++]=sort1[k++];
        }
        else{
            res[i++]=sort2[j++];
        }
    }
    while(k<sort1.length){
        res[i++]=sort1[k++];
    }
    while(j<sort2.length)  {
            res[i++]=sort1[j++];
        }
    return res;
}
var resultarr=mergetwoarr(sort1,sort2,res,finallength);
console.log(resultarr);