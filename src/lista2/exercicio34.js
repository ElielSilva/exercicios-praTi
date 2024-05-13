function multiplicarLinhaPeloElementoDiagonalPrincipal(matriz) {
    let matrizModificada = matriz.map((linha, indiceLinha) => {
        let elementoDiagonalPrincipal = linha[indiceLinha];
        return linha.map(elemento => elemento * elementoDiagonalPrincipal);
    });

    return matrizModificada;
}

// Exemplo de uso:
let matriz50x50 = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => Math.floor(Math.random() * 10)));
let matrizModificada = multiplicarLinhaPeloElementoDiagonalPrincipal(matriz50x50);
console.log("Matriz original:");
console.log(matriz50x50);
console.log("Matriz modificada:");
console.log(matrizModificada);
