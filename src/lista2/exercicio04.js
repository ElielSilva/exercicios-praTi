const prompt = require("prompt-sync")();
const a = prompt("Digite o comprimento do primeiro segmento:");
const b = prompt("Digite o comprimento do segundo segmento:");
const c = prompt("Digite o comprimento do terceiro segmento:");

if (a < b + c && b < a + c && c < a + b) {
    console.log("É possível formar um triângulo com esses segmentos.");
} else {
    console.log("Não é possível formar um triângulo com esses segmentos.");
}
