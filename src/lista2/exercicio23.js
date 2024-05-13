function imprimirMatrizIdentidade(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            if (i === j) {
                row += "1 ";
            } else {
                row += "0 ";
            }
        }
        console.log(row);
    }
}

// Exemplo de uso:
imprimirMatrizIdentidade(7);
