function firstUniqChar(str: string): number {
    const set = new Set<string>();

    for(let i = 0; i < str.length; i++) {
        if(set.has(str[i])) {
            continue;
        }

        if(str.indexOf(str[i], i + 1) === -1) {
            return i;
        } else {
            set.add(str[i])
        }
    }

    return -1;
};