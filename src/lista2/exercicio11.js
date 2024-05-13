const prompt = require("prompt-sync")();
const primeiroTermo = parseInt(prompt("Digite o primeiro termo da PA:"));
const razao = parseInt(prompt("Digite a razão da PA:"));

let soma = 0;
console.log("Os 10 primeiros elementos da PA são:");
for (let i = 0; i < 10; i++) {
    const elemento = primeiroTermo + i * razao;
    console.log(elemento);
    soma += elemento;
}

console.log("A soma dos elementos da PA é:", soma);