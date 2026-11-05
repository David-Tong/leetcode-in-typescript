function findSpecialInteger(arr: number[]): number {
    // pre-process
    const threshold = arr.length / 4
    const map = new Map<number, number>()
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1)
    }
    // console.log(threshold);
    // console.log(dicts);

    // process
    for (const [key, value] of map) {
        if (value > threshold) {
            return key
        }
    }
    return -1
};


const arr = [1,2,2,6,6,6,6,7,10]
console.log(findSpecialInteger(arr))
