function calcularSomas(matriz) {
    let somaLinha4 = 0;
    let somaColuna2 = 0;
    let somaDiagonalPrincipal = 0;
    let somaTotal = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            somaTotal += matriz[i][j];
            if (i === 3) { // Linha 4
                somaLinha4 += matriz[i][j];
            }
            if (j === 1) { // Coluna 2
                somaColuna2 += matriz[i][j];
            }
            if (i === j) { // Diagonal Principal
                somaDiagonalPrincipal += matriz[i][j];
            }
        }
    }

    return [somaLinha4, somaColuna2, somaDiagonalPrincipal, somaTotal];
}

// Exemplo de uso:
let matriz5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
let somas = calcularSomas(matriz5x5);
console.log("Soma da linha 4:", somas[0]);
console.log("Soma da coluna 2:", somas[1]);
console.log("Soma da diagonal principal:", somas[2]);
console.log("Soma total dos elementos:", somas[3]);
console.log("Matriz M:");
matriz5x5.forEach(row => console.log(row));
