const fibonacci = [0, 1];
for (let i = 2; i < 15; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log("Os primeiros 15 elementos da Sequência de Fibonacci são:", fibonacci);
