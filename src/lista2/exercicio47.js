function aplicarFuncaoEmPropriedades(objeto, funcao) {
    let novoObjeto = {};

    for (let chave in objeto) {
        novoObjeto[chave] = funcao(objeto[chave]);
    }

    return novoObjeto;
}

// Exemplo de uso:
let objeto = { a: 1, b: 2, c: 3 };

console.log("Objeto original:", objeto);

let novoObjeto = aplicarFuncaoEmPropriedades(objeto, valor => valor * 2);
console.log("Novo objeto após aplicar a função:", novoObjeto);
