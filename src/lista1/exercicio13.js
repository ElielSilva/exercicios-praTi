const prompt = require("prompt-sync")();

function mostrarTabuada(N) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
        console.log("\n");
    }
}

for (let k = 0; k < 5; k++) {
    let valorN = parseInt(prompt("Digite um valor para N:"));
    mostrarTabuada(valorN);
}