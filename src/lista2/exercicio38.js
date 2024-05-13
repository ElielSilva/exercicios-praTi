function calcularOperacao(vetor, operacao) {
    switch (operacao) {
        case 1:
            return vetor.reduce((acc, val) => acc + val, 0);
        case 2:
            return vetor.reduce((acc, val) => acc * val, 1);
        case 3:
            return vetor.reduce((acc, val) => acc + val, 0) / vetor.length;
        case 4:
            return vetor.sort((a, b) => a - b);
        case 5:
            return vetor;
        default:
            return "Operação inválida";
    }
}

// Exemplo de uso:
let vetor = [5, 3, 8, 2, 7, 1];
let operacao = 1;
console.log("Resultado da operação:", calcularOperacao(vetor, operacao));
