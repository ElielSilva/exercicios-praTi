
console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:");
let a = 0, b = 1;
for (let i = 0; i < 10; i++) {
    console.log(a);
    const proximo = a + b;
    a = b;
    b = proximo;
}