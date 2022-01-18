var searchInsert = function(nums, target) {
    let l = 0 , r = nums.length;
    let mid;
    while(l < r) {
        mid = l + r >> 1;
        if (nums[mid] >= target){
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return r;
};