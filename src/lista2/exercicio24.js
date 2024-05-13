function contarNegativosPorLinha(matriz) {
    let vetorC = [];

    matriz.forEach(linha => {
        let count = 0;
        linha.forEach(elemento => {
            if (elemento < 0) {
                count++;
            }
        });
        vetorC.push(count);
    });

    return vetorC;
}

// Exemplo de uso:
let matrizM = [
    [1, -2, 3, -4, 5, 6, -7, 8],
    [-1, 2, -3, 4, 5, -6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [-1, -2, -3, -4, -5, -6, -7, -8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, -2, -3, 4, -5, -6, -7, 8]
];
let vetorC = contarNegativosPorLinha(matrizM);
console.log("Vetor C:", vetorC);
