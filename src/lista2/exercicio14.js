const nomes = [];
for (let i = 0; i < 7; i++) {
    const nome = prompt(`Digite o ${i + 1}º nome:`);
    nomes.push(nome);
}

console.log("Listagem dos nomes informados (na ordem inversa):");
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}
