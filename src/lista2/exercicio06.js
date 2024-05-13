const prompt = require("prompt-sync")();
const numeroSorteado = Math.floor(Math.random() * 5) + 1;
let tentativas = 0;
let acertou = false;

while (!acertou) {
    const palpite = parseInt(prompt("Tente adivinhar o número entre 1 e 5:"));

    if (palpite >= 1 && palpite <= 5) {
        tentativas++;
        if (palpite === numeroSorteado) {
            acertou = true;
            console.log(`Parabéns! Você acertou o número ${numeroSorteado} em ${tentativas} tentativa(s).`);
        } else {
            console.log("Tente novamente. Você errou.");
        }
    } else {
        console.log("Por favor, insira um número válido entre 1 e 5.");
    }
};
