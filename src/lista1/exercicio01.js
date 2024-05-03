const prompt = require("prompt-sync")();

let celcius, fahrenheit;

function lerDados() {
    celcius = parseInt(prompt("Informe  a temperatura em celcius: "));
}

function calcularDados() {
    fahrenheit = ((celcius * 1.8) + 32);
    
}

function exibirResultados() {
    console.log("Fahrenheit: " + fahrenheit.toFixed(2));
}

lerDados();
calcularDados();
exibirResultados();