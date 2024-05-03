const prompt = require("prompt-sync")();

function verificarTrianguloTipo(A, B, C) {
    if (A < B + C && B < A + C && C < A + B) {
        if (A === B && B === C) {
            return "Triângulo equilátero: todos os lados são iguais.";
        } else if (A === B || A === C || B === C) {
            return "Triângulo isósceles: possui dois lados iguais.";
        } else {
            return "Triângulo escaleno: possui todos os lados diferentes.";
        }
    } else {
        return "Os lados fornecidos não formam um triângulo.";
    }
}

let A = parseFloat(prompt("Digite o valor do lado A do triângulo:"));
let B = parseFloat(prompt("Digite o valor do lado B do triângulo:"));
let C = parseFloat(prompt("Digite o valor do lado C do triângulo:"));

let tipoTriangulo = verificarTrianguloTipo(A, B, C);

console.log(tipoTriangulo);