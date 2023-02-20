function verificar() {
    var ano = window.document.getElementById(`ano`); // buscando o resultado da caixa do input sem transformar a string
    var res = window.document.getElementById(`res`); // buscando a div onde receberá o resultado
    var atual = new Date().getFullYear(); // recebendo o valor do ano atual pelo sistema na variável
    var idade = atual - Number(ano.value); // Executando o cálculo da idade atual da pessoa aproximadamente
    var sex = window.document.getElementsByName(`sexo`); // buscando o resultado do sexo da pessoa (a variável será usada bem depois)
    var img = window.document.createElement(`img`); // Criei uma tag img no HTML
    img.setAttribute(`id`, `foto`) // Criei uma id pra minha tag img
    if (ano.value.length == 0 || ano.value > atual) { // o Length é a quantidade de digitos na caixa de texto
        window.alert(`[ERRO] Verifique os dados e tente novamente!`);
    } else {
        var genero = ``; // A variável recebeu um espaço pra ser preenchido depois de acordo com o que for decidido.
        if (sex[0].checked) { // Se a opção for masculino
            genero = `Homem`; // Se a opção for masculino, a variável recebe esse valor
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute(`src`, `./imagens/menino.png`); //Adicionei o arquivo de imagem mas ainda não estou mostrando-a
            } else if (idade < 21) {
                // Jovem
                img.setAttribute(`src`, `./imagens/jovem.png`);
            } else if (idade < 50) {
                // Adulto
                img.setAttribute(`src`, `./imagens/jovem.png`);
            } else {
                // Idoso
                img.setAttribute(`src`, `./imagens/idoso.png`);
            }
        } else {
            genero = `Mulher`; // Se a opção for feminino a variável recebe esse valor
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute(`src`, `./imagens/menina.png`);
            } else if (idade < 21) {
                // Jovem
                img.setAttribute(`src`, `./imagens/jovem-garota.png`);
            } else if (idade < 50) {
                // Adulta
                img.setAttribute(`src`, `./imagens/jovem-garota.png`);
            } else {
                // Idosa
                img.setAttribute(`src`, `./imagens/idosa.png`);
            }
        }
        res.style.textAlign = `center`; // No meu espaço `res`, no meu estilo, adicione um Text align `center`;
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img); // No meu espaço `res` adicione um elemento filho (tag)
        // Antes eu apenas tinha declarado a tag como variável mas somente agora fiz ela aparecer no meu HTML.
    }
}