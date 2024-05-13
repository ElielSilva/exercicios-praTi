const prompt = require("prompt-sync")();
const tipoCarro = prompt("Digite o tipo de carro alugado (popular ou luxo):").toLowerCase();
const diasAluguel = parseInt(prompt("Quantos dias de aluguel?"));
const kmPercorridos = parseInt(prompt("Quantos Km foram percorridos?"));

let precoCarroPorDia, precoPorKm;

if (tipoCarro === "popular") {
    precoCarroPorDia = 90;
    precoPorKm = kmPercorridos <= 100 ? 0.20 : 0.10;
} else if (tipoCarro === "luxo") {
    precoCarroPorDia = 150;
    precoPorKm = kmPercorridos <= 200 ? 0.30 : 0.25;
} else {
    console.log("Tipo de carro inválido.");
}

const precoTotal = (precoCarroPorDia * diasAluguel) + (precoPorKm * kmPercorridos);
console.log("O preço total a ser pago é R$", precoTotal.toFixed(2));