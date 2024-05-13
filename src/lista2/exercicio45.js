function contarStrings(array) {
    let objeto = {};

    array.forEach(string => {
        if (objeto[string]) {
            objeto[string]++;
        } else {
            objeto[string] = 1;
        }
    });

    return objeto;
}

// Exemplo de uso:
let array = ["a", "b", "c", "a", "b", "a", "c", "d", "e", "a"];
console.log("Objeto com contagem de strings:", contarStrings(array));
