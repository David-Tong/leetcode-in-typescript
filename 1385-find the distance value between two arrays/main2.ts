function findTheDistanceValue(
    arr1: number[],
    arr2: number[],
    d: number,
): number {
    let ans = 0;
    for (const num1 of arr1) {
        let within = false
        for (const num2 of arr2) {
            if (Math.abs(num1 - num2) <= d) {
                within = true
                break
            }
        }
        within ? ans : ans += 1
    }
    return ans
}

const arr1 = [4, 5, 8];
const arr2 = [10, 9, 1, 8];
const d = 2;

console.log(findTheDistanceValue(arr1, arr2, d));
