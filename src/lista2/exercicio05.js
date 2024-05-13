const prompt = require("prompt-sync")();
const opcoes = ["pedra", "papel", "tesoura"];
const computador = opcoes[Math.floor(Math.random() * opcoes.length)];

const jogador = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

if (opcoes.includes(jogador)) {
    console.log("Computador escolheu:", computador);

    if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "papel" && computador === "pedra") ||
        (jogador === "tesoura" && computador === "papel")
    ) {
        console.log("Você ganhou!");
    } else if (jogador === computador) {
        console.log("Empate!");
    } else {
        console.log("Você perdeu!");
    }
} else {
    console.log("Escolha inválida. Por favor, escolha entre pedra, papel ou tesoura.");
}
