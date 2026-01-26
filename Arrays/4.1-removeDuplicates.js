//leetcode 26. Remove Duplicates from Sorted Array

function removeDuplicates(nums){
    if(nums.length === 0)return 0;
    let p = 0;
    for(i=0;i<nums.length;i++){
        if(nums[p]<nums[i]){
            p++;
            nums[p]=nums[i];
        }
    }
    return p+1;

}

console.log(removeDuplicates([1,2,2,3,3,3,4,5,7,7,7,8]))