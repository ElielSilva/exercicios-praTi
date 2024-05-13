function filtrarPropriedadesArray(objeto) {
    let novoObjeto = {};

    for (let chave in objeto) {
        if (Array.isArray(objeto[chave])) {
            novoObjeto[chave] = objeto[chave];
        }
    }

    return novoObjeto;
}

// Exemplo de uso:
let dados = {
    numeros: [1, 2, 3],
    texto: "Olá",
    array: [4, 5, 6],
    outroArray: ["a", "b", "c"]
};

console.log("Novo objeto apenas com propriedades que são arrays:", filtrarPropriedadesArray(dados));
