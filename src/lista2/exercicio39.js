function compactarVetor(vetorA) {
    let vetorB = vetorA.filter(elemento => elemento > 0);

    return vetorB;
}

// Exemplo de uso:
let vetorA = [1, 2, -3, 4, 0, 6, -7, 8, 0, 10, -11, 12, 0, 14, 15, -16, 17, 18, 0, 20, -21];
let vetorB = compactarVetor(vetorA);
console.log("Vetor B (compactado):", vetorB);
