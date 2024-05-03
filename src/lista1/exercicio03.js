const prompt = require("prompt-sync")();

let eleitores, brancos, nulos, validos;
let percentual_brancos, percentual_nulos, percentual_validos;

function lerDados() {
    eleitores = parseInt(prompt("Informe o número de eleitores:"));
    brancos = parseInt(prompt("Informe o número de votos em branco:"));
    nulos = parseInt(prompt("Informe o número de votos nulos:"));
    validos = parseInt(prompt("Informe o número de votos válidos:"));
}

function calcularPercentuais() {
    percentual_brancos = (brancos / eleitores) * 100;
    percentual_nulos = (nulos / eleitores) * 100;
    percentual_validos = (validos / eleitores) * 100;
}

function exibirResultados() {
    console.log("Percentual de votos em branco: " + percentual_brancos.toFixed(2) + "%");
    console.log("Percentual de votos nulos: " + percentual_nulos.toFixed(2) + "%");
    console.log("Percentual de votos válidos: " + percentual_validos.toFixed(2) + "%");
}

lerDados();
calcularPercentuais();
exibirResultados();