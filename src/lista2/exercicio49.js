function agruparTransacoesPorCategoria(transacoes) {
    let resultado = {};

    transacoes.forEach(transacao => {
        if (resultado[transacao.categoria]) {
            resultado[transacao.categoria].transacoes.push(transacao);
            resultado[transacao.categoria].subtotal += transacao.valor;
        } else {
            resultado[transacao.categoria] = {
                transacoes: [transacao],
                subtotal: transacao.valor
            };
        }
    });

    return resultado;
}

// Exemplo de uso:
let transacoes = [
    { id: 1, valor: 100, data: "2024-05-01", categoria: "Alimentação" },
    { id: 2, valor: 50, data: "2024-05-02", categoria: "Transporte" },
    { id: 3, valor: 200, data: "2024-05-03", categoria: "Alimentação" },
    { id: 4, valor: 150, data: "2024-05-04", categoria: "Lazer" },
    { id: 5, valor: 80, data: "2024-05-05", categoria: "Transporte" }
];

console.log("Transações agrupadas por categoria:", agruparTransacoesPorCategoria(transacoes));
