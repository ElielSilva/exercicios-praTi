function contarEConstruirMatriz(A, V) {
    let contador = 0;
    let X = [];

    for (let i = 0; i < V.length; i++) {
        X[i] = [];
        for (let j = 0; j < V[i].length; j++) {
            if (V[i][j] === A) {
                contador++;
            } else {
                X[i].push(V[i][j]);
            }
        }
    }

    return { contador, X };
}

// Exemplo de uso:
let A = 5;
let matrizV = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => Math.floor(Math.random() * 10)));
let resultado = contarEConstruirMatriz(A, matrizV);
console.log("Quantidade de valores iguais a A:", resultado.contador);
console.log("Matriz X:");
resultado.X.forEach(row => console.log(row));
