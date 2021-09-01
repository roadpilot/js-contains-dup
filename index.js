/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums = nums.sort()
    const state = {}
    for (i of nums){
        if (state[i]){return true}
        else {state[i]=1}
    }
    return false
};