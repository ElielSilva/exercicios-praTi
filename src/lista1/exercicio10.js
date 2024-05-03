const prompt = require("prompt-sync")();

function escreverNumeroVezes(numero, vezes) {
    for (let i = 0; i < vezes; i++) {
        console.log(numero);
    }
}

let numero = parseInt(prompt("Digite um número inteiro:"));

escreverNumeroVezes(numero, 10);