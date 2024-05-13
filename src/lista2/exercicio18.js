const prompt = require("prompt-sync")();
const funcionario = {
    nome: prompt("Digite o nome do funcionário:"),
    cargo: prompt("Digite o cargo do funcionário:"),
    salario: parseFloat(prompt("Digite o salário do funcionário:"))
};
console.log("Registro do funcionário:");
console.log("Nome:", funcionario.nome);
console.log("Cargo:", funcionario.cargo);
console.log("Salário:", funcionario.salario);

