// Time: 59 ms (beats: 99.69%) | Memory: 45.5 MB (beats: 86.25%) | 387. First Unique Character in a String

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