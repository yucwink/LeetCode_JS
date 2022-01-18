var searchRange = function(nums, target) {
    // 如果数组中没有target返回[-1,-1]
    if(nums.indexOf(target) === -1) return [-1,-1]
    let l = 0 , r = nums.length-1
    let left, right
    let mid
    // 第一次二分找到target最左边的位置
    while(l < r) {
        mid = l + r >> 1
        if (nums[mid] >= target) {
            r = mid
        } else {
            l = mid + 1
        }
    }
    left = r
    l = 0
    r = nums.length-1
    // 第二次二分找到target最右边的位置
    while(l < r) {
        mid = l + r + 1 >> 1
        if (nums[mid] <= target) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    right = r
    return [left, right]
};