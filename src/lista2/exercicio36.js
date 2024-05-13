function verificarAcertosGabarito(gabarito, apostadores) {
    apostadores.forEach(apostador => {
        let numeroApostador = apostador.numero;
        let respostas = apostador.respostas;
        let acertos = 0;

        for (let i = 0; i < gabarito.length; i++) {
            if (gabarito[i] === respostas[i]) {
                acertos++;
            }
        }

        console.log("Apostador", numeroApostador, "- Acertos:", acertos);
        if (acertos === 13) {
            console.log("Parabéns, você foi o GANHADOR!");
        }
    });
}

// Exemplo de uso:
let gabarito = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; // Gabarito do teste
let apostadores = [
    { numero: 1, respostas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] }, // Apostador 1
    { numero: 2, respostas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1] }, // Apostador 2
    // Mais 98 apostadores...
];

verificarAcertosGabarito(gabarito, apostadores);
