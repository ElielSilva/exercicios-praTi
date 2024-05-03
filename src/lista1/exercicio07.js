const prompt = require("prompt-sync")();

function calcularValorCompra(numeroMaca) {
    let precoUnitario;

    if (numeroMaca < 12) {
        precoUnitario = 0.30;
    } else {
        precoUnitario = 0.25;
    }

    let valorTotal = numeroMaca * precoUnitario;

    return valorTotal;
}

let numeroMaca = parseInt(prompt("Digite o número de maçãs compradas:"));

let valorTotalCompra = calcularValorCompra(numeroMaca);

console.log("O valor total da compra é R$ " + valorTotalCompra.toFixed(2));