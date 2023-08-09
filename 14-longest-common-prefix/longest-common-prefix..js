// Time: 62 ms (beats: 51.56%) | Memory: 44.6 MB (beats: 8.39%) | 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let prefix = "";
    const smallestLen = Math.min(...strs.map(str => str.length));
    
    for(let i = 0 ; i < smallestLen; i++) {
        if(!isSameChar(strs, i)) {
            return prefix;
        }
        prefix += strs[0][i];            
    }
        
    return prefix;
};

function isSameChar(strs, index) {
    let check = ""
    for(const str of strs) {
        if(!check) {
            check = str[index];
            continue;
        } 
        
        if(check !== str[index]) {
            return false;
        }
    }
    return true;
}