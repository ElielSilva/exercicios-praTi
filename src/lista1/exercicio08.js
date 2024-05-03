const prompt = require("prompt-sync")();

function ordenarValores(a, b) {
    if (a < b) {
        return [a, b];
    } else {
        return [b, a];
    }
}

let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

let valoresOrdenados = ordenarValores(valor1, valor2);

console.log("Os valores em ordem crescente são:", valoresOrdenados[0], "e", valoresOrdenados[1]);
