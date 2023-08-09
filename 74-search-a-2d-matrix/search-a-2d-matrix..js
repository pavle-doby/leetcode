// Time: 53 ms (beats: 72.80%) | Memory: 41.8 MB (beats: 82.29%) | 74. Search a 2D Matrix

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
function searchMatrix(matrix, target) {
    let hasTarget = false;

    for(let i = 0; i < matrix.length && !hasTarget; i++) {
        hasTarget = binarySearch(matrix[i], target) !== -1;
    }

    return hasTarget;
};

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    let index = Math.floor((left + right) / 2);

    while(left <= right) {
        if(array[index] === target) {
            return index;
        }

        if(array[index] < target) {
            left = index + 1;
        }

        if(array[index] > target) {
            right = index - 1;
        }

        index = Math.floor((left + right) / 2);
    }

    return -1;
}