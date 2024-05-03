const prompt = require("prompt-sync")();

function calcularMediaEVerificarAprovacao(nota1, nota2) {
    let mediaSemestral = (nota1 + nota2) / 2;

    if (mediaSemestral >= 6.0) {
        return `Média semestral: ${mediaSemestral.toFixed(2)}. PARABÉNS! Você foi aprovado.`;
    } else {
        return `Média semestral: ${mediaSemestral.toFixed(2)}. Você não foi aprovado.`;
    }
}

let nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
let nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

let mensagem = calcularMediaEVerificarAprovacao(nota1, nota2);

console.log(mensagem);