/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if(haystack.length < needle.lehgth) {
        return -1;
    }
    
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            if(check(haystack, i, needle)) {
                return i;
            }
        }
    }
    
    return -1;
};

function check(str, start, term) {
    for(let i = 0; i < term.length; i++ ) {
        if(str[i + start] !== term[i]) {
            return false;
        }
    }
    return true;
}