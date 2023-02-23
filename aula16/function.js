function parimpar(n) { // O parâmetro (n) é a "variável" que vou usar no meu bloco de ação
    if (n % 2 == 0) {
        return `Par`; // O return nada mais é do que o resultado da minha ação, nesse caso ele retorna `Par`;
    } else {
        return `Ímpar`; // Se a minha ação chegar nesse resultado, ela terá o valor `Ímpar`;
    }
}
let res = parimpar(10); // Preciso de uma variável para armazenar a chamada com o parâmetro;
console.log(res); // Aqui estou mostrando no console a minha variável;

/*
SIMPLIFICANDO

console.log(parimpar(10));
*/