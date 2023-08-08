/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if(s.length !== t.length) return false;

    const dict = {};

    for(let i = 0; i < s.length; i++) {
        dict[s.at(i)] = dict[s.at(i)] ? (dict[s.at(i)] + 1) : 1;
        dict[t.at(i)] = dict[t.at(i)] ? (dict[t.at(i)] - 1) : -1;
    }

    for(let frequency of Object.values(dict)) {
        if(frequency !== 0) {
            return false;
        }
    }

    return true;
};