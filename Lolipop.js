function stringPatternSearch(text, pattern) {
    text = text.toLowerCase();
  pattern=pattern.toLowerCase();
    let count =0;
    const textLength=text.length;
    const patternLength=pattern.length;
    if(textLength<patternLength){
    //console.log(`No match found `);
      return 0;
    }
    for(let i=0;i+patternLength<=textLength;i++){
     let newStr = text.slice(i,i+patternLength);
    //   console.log(newStr);
      if(newStr === pattern){
        count++;
      }
    }
    console.log(count);
    return count;
  }
  stringPatternSearch("lolopop","lol");
  stringPatternSearch("lolol","lol");