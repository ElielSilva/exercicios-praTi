function multiplicarDiagonalPrincipalPorMediaDiagonalSecundaria(matriz) {
    let diagonalPrincipal = [];
    let diagonalSecundaria = [];

    for (let i = 0; i < matriz.length; i++) {
        diagonalPrincipal.push(matriz[i][i]);
        diagonalSecundaria.push(matriz[i][matriz.length - 1 - i]);
    }

    let mediaDiagonalSecundaria = diagonalSecundaria.reduce((acc, val) => acc + val, 0) / diagonalSecundaria.length;

    let matrizModificada = matriz.map((linha, indiceLinha) => {
        return linha.map((elemento, indiceColuna) => {
            if (indiceLinha === indiceColuna) {
                return elemento * mediaDiagonalSecundaria;
            } else {
                return elemento;
            }
        });
    });

    return matrizModificada;
}

// Exemplo de uso:
let matriz3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let matrizModificada = multiplicarDiagonalPrincipalPorMediaDiagonalSecundaria(matriz3x3);
console.log("Matriz original:");
matriz3x3.forEach(row => console.log(row));
console.log("Matriz modificada:");
matrizModificada.forEach(row => console.log(row));
