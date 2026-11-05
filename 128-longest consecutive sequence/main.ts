function longestConsecutive(nums: number[]): number {
    // pre-process
    const set = new Set<number>(nums)
    nums = Array.from(set).sort((a, b) => a - b)
    if (nums.length === 0) {
        return 0
    }

    // process
    let ans = 1
    let idx = 0
    let len = 1
    while (idx < nums.length) {
        const target = nums.at(idx)! + 1
        if (set.has(target)) {
            len++
            ans = Math.max(ans, len)
        } else {
            len = 1
        }
        idx++
    }
    return ans
};


// const nums = [100, 4, 200, 1, 3, 2]
const nums = [0]
console.log(longestConsecutive(nums))
