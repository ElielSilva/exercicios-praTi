const prompt = require("prompt-sync")();

let num1, num2, num3;
let resultado1, resultado2, resultado3, resultado4;
let resultados;

function lerDados() {
    num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    num2 = parseInt(prompt("Digite o segundo número inteiro:"));
    num3 = parseInt(prompt("Digite o terceiro número inteiro:"));
}

function calcularDados() {
    resultado1 = num1 + 25;
    resultado2 = num2 * 3;
    resultado3 = num3 * 0.12;
    resultado4 = num1 + num2 + num3;

    resultados = [resultado1, resultado2, resultado3, resultado4];
}

function exibirResultados() {
    console.log("Resultado da Operação 1 (somar 25 ao primeiro inteiro):", resultados[0]);
    console.log("Resultado da Operação 2 (triplicar o valor do segundo inteiro):", resultados[1]);
    console.log("Resultado da Operação 3 (modificar o valor do terceiro inteiro para 12% do valor original):", resultados[2]);
    console.log("Resultado da Operação 4 (armazenar a soma dos valores originais dos primeiros três inteiros):", resultados[3]);
}

lerDados();
calcularPercentuais();
exibirResultados();
