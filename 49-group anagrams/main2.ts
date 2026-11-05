function groupAnagrams(strs: string[]): string[][] {
    // pre-process
    const getKey = (str: string) => {
       return str.split("").sort().join("")
    }

    // process
    const map = new Map<string, Array<string>>()
    for (const str of strs) {
        const key = getKey(str)
        if (!map.has(key)) {
            map.set(key, new Array<string>())
        }
        map.get(key)?.push(str)
    }
    // console.log(map)
    
    // post process
    const ans = new Array<Array<string>>()
    for (const[_, value] of map) {
        ans.push(value)
    }
    return ans
};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
