// Função recursiva

function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1); // Aqui estou chamando a minha função dentro dela mesma, o que torna minha função recursiva. (PRECISO ESTUDAR MAIS SOBRE RECURSIVIDADE, ASSUNTO MEIO COMPLEXO E FORA DO CURSOEMVIDEO)
    }
}
console.log(fatorial(5));