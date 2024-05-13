function contarPropriedadesString(objeto) {
    let contador = 0;

    for (let chave in objeto) {
        if (typeof objeto[chave] === "string") {
            contador++;
        }
    }

    return contador;
}

// Exemplo de uso:
let objeto = { a: "foo", b: 123, c: "bar", d: true };

console.log("Número de propriedades do tipo string:", contarPropriedadesString(objeto));
