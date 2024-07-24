function firstPalindrome(words) {
    for(let i=0;i<words.length;i++){
        let strCh=words[i];
       var val = stringPalin(strCh,0,strCh.length-1);
        if(val == 1)
            return strCh;
        
    }
    return "";
    
}
function stringPalin(str,l,r){
    if(str[l]!=str[r]){
              return 0;
    }
    if(l<=(Math.floor(str.length>>1))){
          return 1;
    }
return stringPalin(str,l+1,r-1);
}
var result=stringPalindrome(["ada"]);
console.log(result);

