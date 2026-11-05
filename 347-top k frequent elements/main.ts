function topKFrequent(nums: number[], k: number): number[] {
    // pre-process
    const map = new Map<number, number>()
    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
    }
    const counters = Array.from(map.entries())
    const topK = counters
        .sort((a, b) => {
            if (a[1] != b[1]) {
                return b[1] - a[1]
            }
            return b[0] - a[0]
        })
        .slice(0, k)
    // console.log(topK)
    
    const ans = topK.map((item) => item[0])
    return ans
};


const nums = [1,1,1,2,2,3]
const k = 2

console.log(topKFrequent(nums, k))
