const prompt = require("prompt-sync")();

function verificarParOuImpar(valor) {
    if (valor <= 0) {
        return "Fim do programa.";
    } else if (valor % 2 === 0) {
        return "PAR";
    } else {
        return "ÍMPAR";
    }
}

while (true) {
    let valor = parseInt(prompt("Digite um valor inteiro (Digite 0 ou um número negativo para encerrar):"));

    let mensagem;

    if (isNaN(valor)) {
        mensagem = "Valor inválido. Por favor, digite um número inteiro.";
    } else {
        mensagem = verificarParOuImpar(valor);
    }

    console.log(mensagem);

    if (valor <= 0) {
        break;
    }
}