const prompt = require("prompt-sync")();
const horasAtividade = parseInt(prompt("Quantas horas de atividade física você teve este mês?"));

let pontos, dinheiro;

if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
    pontos = (horasAtividade - 10) * 5 + 10 * 2;
} else {
    pontos = (horasAtividade - 20) * 10 + 10 * 5 + 10 * 2;
}

dinheiro = pontos * 0.05;

console.log(`Você ganhou ${pontos} pontos e R$ ${dinheiro.toFixed(2)} este mês.`);
