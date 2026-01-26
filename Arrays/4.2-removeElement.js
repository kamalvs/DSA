//leetcode 27. Remove Element

var removeElement = function(nums, val) {
    let p=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            let temp = nums[p];
            nums[p] = nums[i];
            nums[i] = temp;
            p++;
        }
    }
    return p;
};

console.log(removeElement([3,2,2,3],3))