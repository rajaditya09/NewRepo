 function leetcode(operations) {
    
    var num =0;
    var newStr = operations.join("");
    // console.log(newStr);
    // var newArr = newStr.split("x");
    var countx = 0;
    var county = 0;
    console.log(newStr);
    for(var i=0;i<newStr.length;i++){
        if(newStr[i]=='+'){
            countx++;
        }
        if(newStr[i]=='-'){
        county++;
        }
    }
   
    var res = (countx>>1) - (county>>1);
    
    
    return res;
    
}
console.log(leetcode(["--X","X++","X++"]));