function groupAnagrams(strs: string[]): string[][] {
    // pre-process
    const map = new Map<string, Array<string>>();
    const getKey = (str: string) => {
        return str.split("").sort().join("")
    }

    // process
    for (const str of strs) {
        const key = getKey(str)
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key)?.push(str)
    }

    // post-process
    return Array.from(map.values())
};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))