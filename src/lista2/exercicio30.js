function calcularSomasLinhasColunas(matriz) {
    let SL = [];
    let SC = [];

    for (let i = 0; i < matriz.length; i++) {
        let somaLinha = 0;
        let somaColuna = 0;
        for (let j = 0; j < matriz[0].length; j++) {
            somaLinha += matriz[i][j];
            somaColuna += matriz[j][i];
        }
        SL.push(somaLinha);
        SC.push(somaColuna);
    }

    return [SL, SC];
}

// Exemplo de uso:
let matriz5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
let somasLinhasColunas = calcularSomasLinhasColunas(matriz5x5);
console.log("Vetor SL:", somasLinhasColunas[0]);
console.log("Vetor SC:", somasLinhasColunas[1]);
console.log("Matriz M:");
matriz5x5.forEach(row => console.log(row));
