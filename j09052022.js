function largestPallindrome(n){

    let pall=[]

    let lNumber = parseInt(Array(n).fill(9).join(''))
    let sNumber = parseInt(1+Array(n-1).fill(0).join(''))

    for(let i = lNumber; i>=sNumber; i--){
        for(let j = lNumber; j>=sNumber; j--){
            let res = i*j;
            if(isPallindrome(res)){
                pall.push(res)
                break
            }
        }
    }
    console.log(pall.length);
    return Math.max(...pall)
}
n=100

function isPallindrome(n){
    re
}