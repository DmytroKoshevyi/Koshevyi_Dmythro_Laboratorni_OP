'use strict'
const testmatrix = [[21,23,3],[7,8,15],[46,5,3]];
const test2matrix = [[21,23,3],[7,8,15,61],[46,5,3]];
const find_max_element = (matrix)=>{
    let currentmax=-Infinity;
    for(let currentrow=0;currentrow<matrix.length;++currentrow)
        {
            for(let currentcolumn=0;currentcolumn<matrix[currentrow].length;++currentcolumn)
            {
                if(matrix[currentrow][currentcolumn]>currentmax)
                    currentmax = matrix[currentrow][currentcolumn];
            }
        }
    return currentmax;
}
console.log(find_max_element(testmatrix));
console.log(find_max_element(test2matrix));