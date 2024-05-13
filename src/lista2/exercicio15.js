const prompt = require("prompt-sync")();
const numeros = [];
const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
    if (numero % 2 === 0) {
        numerosPares.push({ numero: numero, posicao: i });
    }
}

console.log("Números pares digitados e suas posições:");
for (const par of numerosPares) {
    console.log(`Número ${par.numero} na posição ${par.posicao}`);
}
