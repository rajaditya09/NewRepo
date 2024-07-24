var str1='';
var str2='';
var result='';
var str = 'axbabxbbx';
var count=0;
var result='';
var newstr='';
let newArr=str.split('');
//console.log(newArr);
function shiftTheX(newArr,index,str1,str2){
   
//    count++;
//    console.log(count);
    
    if(newArr[index]==='x'){
        
        str1 = str1 + newArr[index];
    }
    else{
       
        str2 = str2 + newArr[index];
    } 
     newstr = str2+str1;
    if(str.length === newstr.length){
        //console.log(newstr.length);
        console.log(newstr);
       //result=newstr;
        return newstr   ;
    }  
    shiftTheX(newArr,index+1,str1,str2);
    
}

 result=shiftTheX(newArr,0,str1,str2,result);
console.log(result);