function multiplyMatrices(matrix1, matrix2) {
    const rows1 = matrix1.length;
    const cols1 = matrix1[0].length;
    const rows2 = matrix2.length;
    const cols2 = matrix2[0].length;

    // Check if matrix multiplication is possible
    if (cols1 !== rows2) {
        throw new Error("Matrix multiplication not possible. The number of columns in matrix1 must be equal to the number of rows in matrix2.");
    }

    // Initialize the result matrix with zeros
    const result = new Array(rows1);
    for (let i = 0; i < rows1; i++) {
        result[i] = new Array(cols2).fill(0);
    }

    // Perform matrix multiplication
    for (let i = 0; i < rows1; i++) {
        for (let j = 0; j < cols2; j++) {
            for (let k = 0; k < cols1; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }

    return result;
}

// Example usage:
const matrix1 = [[1, 2], [3, 4]];
const matrix2 = [[5, 6], [7, 8]];
const resultMatrix = multiplyMatrices(matrix1, matrix2);
console.log(resultMatrix); // Output: [[19, 22], [43, 50]]
