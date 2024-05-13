function combinarObjetos(obj1, obj2) {
    let novoObjeto = {};

    for (let chave in obj1) {
        novoObjeto[chave] = obj1[chave];
    }

    for (let chave in obj2) {
        novoObjeto[chave] = obj2[chave];
    }

    return novoObjeto;
}

// Exemplo de uso:
let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 4, d: 5 };

console.log("Novo objeto combinado:", combinarObjetos(obj1, obj2));
