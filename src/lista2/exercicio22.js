function analisarDados(populacao) {
    let totalSalario = 0;
    let totalFilhos = 0;
    let maiorSalario = 0;
    let numPessoasSalarioAte350 = 0;
    let numPessoas = populacao.length;

    populacao.forEach(pessoa => {
        let salario = pessoa[0];
        let numFilhos = pessoa[1];
        totalSalario += salario;
        totalFilhos += numFilhos;
        if (salario > maiorSalario) {
            maiorSalario = salario;
        }
        if (salario <= 350) {
            numPessoasSalarioAte350++;
        }
    });

    let mediaSalario = totalSalario / numPessoas;
    let mediaFilhos = totalFilhos / numPessoas;
    let percentualSalarioAte350 = (numPessoasSalarioAte350 / numPessoas) * 100;

    return [mediaSalario, mediaFilhos, maiorSalario, percentualSalarioAte350];
}

// Exemplo de uso:
let populacao = [[1000, 2], [1500, 1], [300, 3], [400, 2]];  // Exemplo de dados
let resultado = analisarDados(populacao);
console.log("Média salarial:", resultado[0]);
console.log("Média de filhos por pessoa:", resultado[1]);
console.log("Maior salário:", resultado[2]);
console.log("Percentual de pessoas com salário até R$ 350,00:", resultado[3], "%");
