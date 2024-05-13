function matrizProduto(A, B) {
    let P = [];

    for (let i = 0; i < A.length; i++) {
        P[i] = [];
        for (let j = 0; j < A[0].length; j++) {
            P[i][j] = A[i][j] * B[i][j];
        }
    }

    return P;
}

// Exemplo de uso:
let A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];
let B = [
    [5, 4, 3, 2, 1],
    [10, 9, 8, 7, 6],
    [15, 14, 13, 12, 11]
];
let produto = matrizProduto(A, B);
console.log("Matriz Produto:", produto);
