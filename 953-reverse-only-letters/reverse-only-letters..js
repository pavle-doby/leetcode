// Time: 45 ms (beats: 97.96%) | Memory: 41.4 MB (beats: 98.41%) | 953. Reverse Only Letters

/**
 * @param {string} s
 * @return {string}
 */
function reverseOnlyLetters(str) {
    const pureStrArr = str.split("").filter(isEnglishLetter).reverse();
    
    for(let i = 0; i < str.length; i++) {
        if(!isEnglishLetter(str[i])) {
            pureStrArr.splice(i, 0, str[i])
        }
    }

    return pureStrArr.join("")
};

function isEnglishLetter(char) {
    const isLowerCaseLetter = char >= "a" && char <= "z";
    const isUpperCaseLetter = char >= "A" && char <= "Z";
    return isLowerCaseLetter || isUpperCaseLetter
}