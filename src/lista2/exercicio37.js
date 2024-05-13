function verificarAprovacao(gabarito, alunos) {
    alunos.forEach(aluno => {
        let numeroAcertos = 0;

        for (let i = 0; i < gabarito.length; i++) {
            if (gabarito[i] === aluno.respostas[i]) {
                numeroAcertos++;
            }
        }

        console.log("Aluno:", aluno.numero, "- Número de acertos:", numeroAcertos);
        if (numeroAcertos >= 12) {
            console.log("APROVADO");
        } else {
            console.log("REPROVADO");
        }
    });
}

// Exemplo de uso:
let gabarito = ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C']; // Gabarito da prova
let alunos = [
    { numero: 1, respostas: ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'C'] }, // Aluno 1
    { numero: 2, respostas: ['A', 'B', 'C', 'D', 'E', 'A', 'B', 'C', 'D', 'E', 'A', 'B', 'D'] }, // Aluno 2
    // Mais 48 alunos...
];

verificarAprovacao(gabarito, alunos);
