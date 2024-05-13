function separarParesEImpares(valores) {
    let pares = [];
    let impares = [];

    valores.forEach(valor => {
        if (valor % 2 === 0) {
            if (pares.length < 5) {
                pares.push(valor);
            } else {
                console.log("Vetor de pares está cheio:", pares);
            }
        } else {
            if (impares.length < 5) {
                impares.push(valor);
            } else {
                console.log("Vetor de ímpares está cheio:", impares);
            }
        }
    });

    console.log("Vetor de pares:", pares);
    console.log("Vetor de ímpares:", impares);
}

// Exemplo de uso:
let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
separarParesEImpares(valores);
