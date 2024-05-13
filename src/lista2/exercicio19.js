const prompt = require("prompt-sync")();
const horarios = [];
for (let i = 0; i < 5; i++) {
    let hora, minuto, segundo;
    do {
        hora = parseInt(prompt(`Digite a hora ${i + 1} (0-23):`));
    } while (hora < 0 || hora > 23);
    do {
        minuto = parseInt(prompt(`Digite o minuto ${i + 1} (0-59):`));
    } while (minuto < 0 || minuto > 59);
    do {
        segundo = parseInt(prompt(`Digite o segundo ${i + 1} (0-59):`));
    } while (segundo < 0 || segundo > 59);
    horarios.push(`${hora < 10 ? '0' + hora : hora}:${minuto < 10 ? '0' + minuto : minuto}:${segundo < 10 ? '0' + segundo : segundo}`);
}
console.log("Horários digitados:");
console.log(horarios);
