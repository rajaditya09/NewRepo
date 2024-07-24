
let heights=[1,1,4,2,1,3];
let count =0;
   const  clone = [].concat(heights);
   clone.sort((a, b) => a - b);
   //console.log(clone) ;
   //console.log(heights) ;
   for(let i=0;i<heights.length;i++){
	   if(heights[i]===clone[i]){
		   count++;
	   }
   }
   console.log(heights.length-count) ;