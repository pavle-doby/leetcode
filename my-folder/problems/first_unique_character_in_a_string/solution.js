/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const dict = {}
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] in dict) {
            continue;
        }
        
        if(s.indexOf(s[i], i + 1) === -1) {
            return i;
        } else {
            dict[s[i]] = i;
        }
    }
    
    return -1;
};