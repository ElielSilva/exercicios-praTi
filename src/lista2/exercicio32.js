function dividirPorMaiorElemento(matriz) {
    let matrizModificada = [];

    matriz.forEach(linha => {
        let maiorModulo = Math.max(...linha.map(Math.abs));
        let linhaModificada = linha.map(elemento => elemento / maiorModulo);
        matrizModificada.push(linhaModificada);
    });

    return matrizModificada;
}

// Exemplo de uso:
let matriz12x13 = [
    [1, 2, -3, 4, -5, 6, 7, -8, 9, 10, 11, 12, 13],
    [-13, 12, 11, -10, 9, -8, 7, 6,5, -4, 3, 2, 1],
    [1, -2, 3, -4, 5, -6, 7,-8, 9,10, 11, 12, 13],
    [-13, 12, 11, -10, 9, -8, 7, 6, 5, -4, 3, 2, 1],
    [1, -2, 3, -4, 5, -6,7, -8, 9, 10, 11, 12, 13],
    [-13, 12, 11, -10, 9, -8, 7, 6, 5, -4, 3, 2, 1],
    [1, -2, 3, -4, 5, -6, 7, -8, 9, 10, 11, 12, 13],
    [-13, 12, 11, -10, 9, -8, 7, 6, 5, -4, 3, 2, 1],
    [1, -2, 3, -4, 5, -6, 7, -8, 9, 10, 11, 12, 13],
    [-13, 12, 11, -10, 9, -8, 7, 6, 5, -4, 3, 2, 1],
    [1, -2, 3, -4, 5, -6, 7, -8, 9, 10, 11, 12, 13],
    [-13, 12, 11, -10, 9, -8, 7, 6, 5, -4, 3, 2, 1]
];
let matrizModificada = dividirPorMaiorElemento(matriz12x13);
console.log("Matriz original:");
matriz12x13.forEach(row => console.log(row));
console.log("Matriz modificada:");
matrizModificada.forEach(row => console.log(row));
