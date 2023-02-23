let num = document.getElementById(`number`);
let tab = document.getElementById(`tab`);
let res = document.getElementById(`res`);
let valores = [];

function isNumero(n) { // FUNÇÃO QUE SERÁ CHAMADAS POR OUTRA FUNÇÃO;
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) { // FUNÇÃO QUE SERÁ CHAMADA POR OUTRA FUNÇÃO
    if (l.indexOf(Number(n)) != -1) { //
        return true;
    } else {
        return false;
    }
}

function enviar() { // MINHA FUNÇÃO PRINCIPAL QUE SERÁ CHAMADA PELO ONCLICK DO HTML MAS QUE UTILIZA DE OUTRAS FUNÇÕES DENTRO DO MEU JS.
    if (isNumero(num.value) && !inLista(num.value, valores)) { //
        valores.push(Number(num.value));
        let item = document.createElement(`option`);
        item.text = `O valor ${num.value} foi adicionado`;
        tab.appendChild(item);
        res.innerHTML = ``;
    } else {
        alert(`[ERRO] Valor inválido ou já encontrado na lista.`);
    }
    num.value = ``;
    num.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert(`Adicione valores antes de finalizar`);
    } else {
        let tot = valores.length;
        let maior = valores [0];
        let menor = valores [0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            } else {
                menor = valores[pos]; // TEM UM ERRO A SER CORRIGIDO, O MENOR VALOR TEM RESULTADO ERRADO QUANDO O 1 VEM ANTES DO 3 (OS DOIS MENORES VALORES DA LISTA);
            }
        }
        media = soma / tot;
        
        res.innerHTML = ``;
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado é o ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado é o ${menor}.</p>`;
        res.innerHTML += `<p>A soma dos valores informado é ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores informado é ${media}.</p>`;
    }
}