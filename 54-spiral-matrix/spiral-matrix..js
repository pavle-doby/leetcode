// Time: 56 ms (beats: 57.73%) | Memory: 42.1 MB (beats: 29.36%) | 54 - Spiral Matrix

function takeRowToRight(matrix) {
    if(!matrix.length) {
        return [[], []];
    }
    return [matrix.shift() || [], matrix];
}

function takeRowToLeft(matrix) {
    if(!matrix.length) {
        return [[], []];
    }
    return [matrix.pop()?.reverse() || [], matrix];
}

function takeColToDown(matrix) {
    if(!matrix[0]?.length) {
        return [[], []];
    }
    return [matrix.map(row => row.pop()), matrix];
}

function takeColToUp(matrix) {
    if(!matrix[0]?.length) {
        return [[], []];
    }
    return [matrix.map(row => row.shift()).reverse(), matrix];
}

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {    
    let arr = [];
    let elements = [];
    
    // Right
    [elements, matrix] = takeRowToRight(matrix);
    arr = [...arr, ...elements];
    
    // Down
    [elements, matrix] = takeColToDown(matrix);
    arr = [...arr, ...elements];
    
    // Left
    [elements, matrix] = takeRowToLeft(matrix);
    arr = [...arr, ...elements];
    
    // Up
    [elements, matrix] = takeColToUp(matrix);
    arr = [...arr, ...elements];
    
    if(matrix.length) {
        arr = [...arr, ...spiralOrder(matrix)];        
    }
    
    return arr;
};