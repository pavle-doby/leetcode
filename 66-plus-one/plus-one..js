// Time: 51 ms (beats: 85.60%) | Memory: 42 MB (beats: 49.11%) | 66 - Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {        
    function increment({digits, index, inc}) {
        // when number exapndes [9,9]  -> [1,0,0]
        if(index < 0) {
            digits.unshift(0);
            index = 0;
        }

        let resArray = [...(digits.at(index) + inc).toString()].map(Number);
        
        if(resArray.length === 1) {
            digits[index] = resArray[0];
            return digits;
        } else {
            digits[index] = resArray[1];
            return increment({digits, index: index - 1, inc: resArray[0]});
        }
    }
    
    return increment({digits, index: digits.length - 1, inc: 1});
};