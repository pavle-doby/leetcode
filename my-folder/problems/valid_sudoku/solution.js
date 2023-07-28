const boxStartDict = {
    0: [0,0],
    1: [0,3],
    2: [0,6],
    
    3: [3,0],
    4: [3,3],
    5: [3,6],

    6: [6,0],
    7: [6,3],
    8: [6,6],

}

/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    let row, col, box;

    for(let i=0; i < board.length; i++) {
        row = board[i];
        if(!isValid(row)) {
            return false;
        }
        
        col = getCol(board, i);
        if(!isValid(col)) {
            return false;
        }
        
        box = getBox(board, i);
        if(!isValid(box)) {
            return false;
        }
    }
    
    return true;
};

function isValid(array) {
    const onlyNumsArray = array.filter(num => !isNaN(num)).map(Number);
    const onlyNumsSet = new Set(onlyNumsArray);

    if(onlyNumsArray.length !== onlyNumsSet.size) {
        return false;
    }

    for(const num of onlyNumsArray) {
        if(num > 9 || num < 0) {
            return false;
        }
    }

    return true;
}

function getCol(matrix, index) {
    const col = [];
    for(let i = 0; i < matrix.length; i++) {
        col.push(matrix[i][index])
    }
    return col;
}

function getBox(matrix, index, size = 3) {
    const box = [];
    let [row,col] = boxStartDict[index];
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            box.push(matrix[row + i][col + j])
        }
    }
    
    return box;
}