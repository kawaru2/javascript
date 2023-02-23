let valores = [8, 1, 7, 4, 2, 9];
for( let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}

/*
OUTRA FORMA DE TER O MESMO RESULTADO (SÓ PODE SER USADO EM ARRAYS E EM OBJETOS) TODO ARRAY É UM OBJETO EM JS.
for(pos in valores) {
    console.log(valores[pos]);
}

PARA PROCURARMOS VALORES DENTRO DE UM VETOR (ARRAY)
BASTA COLOCAR DA SEGUINTE FORMA, VEJA ABAIXO:

valores.indexOf(7);

DESSA FORMA, ESTOU PROCURANDO PELO VALOR 7, O RETORNO SERÁ A CHAVE ONDE SE ENCONTRA O VALOR, NO NOSSO CASO É A CHAVE 2.
CASO O VALOR PROCURADO NÃO EXISTA, O JS RETORNA O VALOR -1.
*/