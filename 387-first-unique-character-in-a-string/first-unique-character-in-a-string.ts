function firstUniqChar(str: string): number {
    const map = new Map<string, { count: number, index: number}>();
    for(let i = 0; i < str.length; i++) {
        if(map.has(str[i])) {
            map.get(str[i]).count += 1;
        } else {
            map.set(str[i], {count: 1, index: i});
        }
    }

    for(const freqObj of map.values()) {
        if(freqObj.count === 1) {
            return freqObj.index;
        }
    }

    return -1;
};