const prompt = require("prompt-sync")();let continuar;
let soma = 0;
let menorValor;
let contadorPares = 0;
let quantidade = 0;

do {
    const numero = parseFloat(prompt("Digite um número:"));
    soma += numero;

    if (quantidade === 0 || numero < menorValor) {
        menorValor = numero;
    }

    if (numero % 2 === 0) {
        contadorPares++;
    }

    quantidade++;

    continuar = prompt("Deseja continuar? (S/N)").toUpperCase();
} while (continuar === "S");

const media = soma / quantidade;

console.log("Somatório entre todos os valores:", soma);
console.log("Menor valor digitado:", menorValor);
console.log("Média entre todos os valores:", media.toFixed(2));
console.log("Quantidade de valores pares:", contadorPares);