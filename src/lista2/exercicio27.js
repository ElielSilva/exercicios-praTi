function matrizParaVetor(m, a) {
    let vetorV = [];

    m.forEach(linha => {
        linha.forEach(elemento => {
            vetorV.push(elemento * a);
        });
    });

    return vetorV;
}

// Exemplo de uso:
let matrizM = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];
let valorA = 2;
let vetorV = matrizParaVetor(matrizM, valorA);
console.log("Vetor V:", vetorV);
