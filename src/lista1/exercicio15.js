const prompt = require("prompt-sync")();

let somaPonderada = 0;
let somaPesos = 0;
let numero = parseFloat(prompt("Digite um número decimal (0 para encerrar):"));

while (numero !== 0) {
    let peso = parseFloat(prompt("Digite o peso do número:"));
    somaPonderada += numero * peso;
    somaPesos += peso;
    numero = parseFloat(prompt("Digite um número decimal (0 para encerrar):"));
}

if (somaPesos !== 0) {
    let mediaPonderada = somaPonderada / somaPesos;
    console.log("A média ponderada dos números é:", mediaPonderada.toFixed(2));
} else {
    console.log("Nenhum número foi digitado.");
}