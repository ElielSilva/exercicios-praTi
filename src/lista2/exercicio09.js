const prompt = require("prompt-sync")();
let continuar = true;
let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (continuar) {
    const salario = parseFloat(prompt("Digite o salário do funcionário:"));
    const sexo = prompt("Digite o sexo do funcionário (M para masculino ou F para feminino):").toUpperCase();

    if (sexo === "M") {
        totalSalarioHomens += salario;
    } else if (sexo === "F") {
        totalSalarioMulheres += salario;
    } else {
        console.log("Sexo inválido.");
    }

    continuar = prompt("Deseja continuar? (S/N)").toUpperCase() === "S";
}

console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);
