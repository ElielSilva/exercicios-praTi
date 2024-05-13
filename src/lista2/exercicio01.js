const prompt = require("prompt-sync")();
const cigarrosPorDia = prompt("Quantos cigarros você fuma por dia?");
const anosFumando = prompt("Há quantos anos você fuma?");

const totalCigarros = cigarrosPorDia * 365 * anosFumando;
const tempoPerdidoMinutos = totalCigarros * 10;
const tempoPerdidoDias = tempoPerdidoMinutos / (24 * 60);

console.log(`Você perderá aproximadamente ${tempoPerdidoDias.toFixed(2)} dias de vida devido ao cigarro.`);
