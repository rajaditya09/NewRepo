let arr=[2,-5,3,-10,-1,2,4];



function countNoOfBit(num){
    let count=0;
    while(num>0){
        num= num & (num -1);
        count++;
    }
    return count;
}
function comp(p,q){
    let countOf1st=countNoOfBit(p);
    let countOf2nd=countNoOfBit(q);
    return countOf2nd-countOf1st;

}
arr.sort(comp);
console.log(arr);