const prompt = require("prompt-sync")();

function imprimirRegiao(codigo) {
    let regiao;

    switch (codigo) {
        case 1:
            regiao = "Sul";
            break;
        case 2:
            regiao = "Norte";
            break;
        case 3:
            regiao = "Leste";
            break;
        case 4:
            regiao = "Oeste";
            break;
        case 5:
        case 6:
            regiao = "Nordeste";
            break;
        case 7:
        case 8:
        case 9:
            regiao = "Sudeste";
            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            regiao = "Nordeste";
            break;
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47:
        case 48:
        case 49:
        case 50:
            regiao = "Nordeste";
            break;
        default:
            regiao = "Região não identificada";
            break;
    }

    return regiao;
}

let codigo = parseInt(prompt("Digite o código de origem do produto:"));

let regiaoProduto = imprimirRegiao(codigo);

console.log("A região do produto é:", regiaoProduto);