function verificarGanhador(resultadoOficial, apostas) {
    apostas.forEach(aposta => {
        let acertos = 0;
        for (let i = 0; i < resultadoOficial.length; i++) {
            if (aposta[i] === resultadoOficial[i]) {
                acertos++;
            }
        }
        if (acertos === 5) {
            console.log("Ganhador!");
        }
    });
}

// Exemplo de uso:
let resultadoOficial = [1, 2, 3, 4, 5];
let apostas = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 6],
    [1, 2, 3, 4, 7],
    // Mais 47 apostas...
];

verificarGanhador(resultadoOficial, apostas);
