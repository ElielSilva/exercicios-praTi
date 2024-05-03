const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero = parseFloat(prompt("Digite um número decimal (0 para encerrar):"));

while (numero !== 0) {
    soma += numero;
    contador++;
    numero = parseFloat(prompt("Digite um número decimal (0 para encerrar):"));
}

if (contador !== 0) {
    let media = soma / contador;
    console.log("A média aritmética dos números digitados é:", media.toFixed(2));
} else {
    console.log("Nenhum número foi digitado.");
}
