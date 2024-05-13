function sumarizarVendasPorVendedor(vendas) {
    let sumario = {};

    vendas.forEach(venda => {
        if (sumario[venda.vendedor]) {
            sumario[venda.vendedor] += venda.valor;
        } else {
            sumario[venda.vendedor] = venda.valor;
        }
    });

    return sumario;
}

// Exemplo de uso:
let vendas = [
    { vendedor: "João", valor: 100 },
    { vendedor: "Maria", valor: 200 },
    { vendedor: "João", valor: 150 },
    { vendedor: "Pedro", valor: 120 },
    { vendedor: "Maria", valor: 180 }
];

console.log("Sumário de vendas por vendedor:", sumarizarVendasPorVendedor(vendas));
