function pesoIdeal(alt, sexo) {
    if (sexo === 'masculino') {
        return 72.7 * alt - 58;
    } else if (sexo === 'feminino') {
        return 62.1 * alt - 44.7;
    } else {
        return "Sexo inválido";
    }
}

// Exemplo de uso:
let altura = 1.75;
let sexo = 'masculino';
console.log("Peso ideal:", pesoIdeal(altura, sexo));
