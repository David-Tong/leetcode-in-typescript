function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let ans = 0
    for (const num1 of arr1) {
        arr2.every((num2) => Math.abs(num1 - num2) > d) ? ans++ : ans  
    }
    return ans
};

const arr1 = [4, 5, 8]
const arr2 = [10, 9, 1, 8]
const d = 2

console.log(findTheDistanceValue(arr1, arr2, d))