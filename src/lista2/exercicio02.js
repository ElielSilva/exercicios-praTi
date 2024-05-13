const prompt = require("prompt-sync")();
const velocidade = prompt("Qual é a velocidade do carro em Km/h?");

if (velocidade > 80) {
    const multa = (velocidade - 80) * 5;
    console.log("Você foi multado!");
    console.log(`Valor da multa: R$ ${multa.toFixed(2)}`);
} else {
    console.log("Velocidade dentro do limite permitido.");
}
