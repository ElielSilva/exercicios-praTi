function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    let inventarioCombinado = {};

    for (let item in inventarioLojaA) {
        if (inventarioLojaB[item]) {
            inventarioCombinado[item] = inventarioLojaA[item] + inventarioLojaB[item];
        } else {
            inventarioCombinado[item] = inventarioLojaA[item];
        }
    }

    for (let item in inventarioLojaB) {
        if (!inventarioLojaA[item]) {
            inventarioCombinado[item] = inventarioLojaB[item];
        }
    }

    return inventarioCombinado;
}

// Exemplo de uso:
let inventarioLojaA = { maça: 10, banana: 15, laranja: 20 };
let inventarioLojaB = { banana: 20, pera: 15, uva: 10 };

console.log("Inventário combinado:", combinarInventarios(inventarioLojaA, inventarioLojaB));
