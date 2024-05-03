const prompt = require("prompt-sync")();

let contadorPrimos = 0;
let numeroAtual = 101;

while (contadorPrimos < 50) {
    let divisor = 2;
    let primo = true;

    while (divisor < numeroAtual && primo) {
        if (numeroAtual % divisor === 0) {
            primo = false;
        }
        divisor++;
    }

    if (primo) {
        console.log(numeroAtual);
        contadorPrimos++;
    }

    numeroAtual++;
}