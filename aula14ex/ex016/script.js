function calc() {
    var n1 = document.getElementById(`n1`).value; // 0
    var n2 = document.getElementById(`n2`).value; // 10
    var passo = document.getElementById(`p`).value; // 2
    if (n1.length == 0 || n2.length == 0 || passo.length == 0) {
        alert(`[ERRO] Faltam dados para executar a operação. Tente novamente!`);
        document.getElementById(`res`).innerHTML = ``;
    } else {
        document.getElementById(`res`).innerHTML = `Contando: <br>`;
        var i = Number(n1);
        var f = Number(n2);
        var p = Number(passo);
        if (p <= 0) {
            p = 1;
            alert(`IMPOSSÍVEL CONTAR! considerando passo = 1`);
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                document.getElementById(`res`).innerHTML += ` 👉 ${c} `; // Não funciona se a ordem do += estiver diferente / PARA UTILIZAR EMOJI NO JS, UTILIZAMOS O \u{1f449}. Precisa tirar o U+ dp código.
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                document.getElementById(`res`).innerHTML += ` 👉 ${c} `;
            }
        }
        }
        document.getElementById(`res`).innerHTML += `\u{1f3c1} FIM`
    }