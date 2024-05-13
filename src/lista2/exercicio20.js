
const funcionarios = [];

for (let i = 1; i <= 80; i++) {
    funcionarios.push({
        matricula: i,
        nome: `Funcionário ${i}`,
        cargo: `Cargo ${i}`,
        salario: Math.floor(Math.random() * 5000) + 2000 // Salário aleatório entre R$ 2000 e R$ 6999
    });
}

for (const funcionario of funcionarios) {
    const deducaoINSS = funcionario.salario * 0.12;
    const salarioLiquido = funcionario.salario - deducaoINSS;
    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salario);
    console.log("Dedução INSS:", deducaoINSS);
    console.log("Salário líquido:", salarioLiquido);
    console.log();
}

