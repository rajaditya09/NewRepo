 function findMedianSortedArrays(nums1, nums2) {
    let number=0
    let nums3 = nums1.concat(nums2);
    nums3.sort(function(a, b){return a-b});
    console.log(nums3);
    if(nums3.length % 2 !== 0)
        number = nums3[Math.floor((nums3.length)/2)];
    else
        number = (nums3[(nums3.length/2)] + nums3[(nums3.length/2)-1])/2
    return number;
    
}

console.log(findMedianSortedArrays([1,2],[3,4]));