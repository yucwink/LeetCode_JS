var mySqrt = function(x) {
    let l = 0 , r = x
    let mid
    while(l < r) {
        mid = l + r + 1 >> 1
        if (mid <= x/mid) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    return r
};