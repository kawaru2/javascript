function calc() {
    var num = document.getElementById(`tab`).value;
    var res = document.getElementById(`res`);
    if (num.length == 0) {
        alert(`[ERRO] Dados inválidos, tente novamente!`);
    } else {
        res.innerHTML = ``;
        var n = Number(num);
        for ( var c = 1; c <= 10; c += 1) {
        var item = document.createElement(`option`);
        item.text = `${n} x ${c} = ${n*c}`;
        res.value = `res${c}`;
        res.appendChild(item);
        }
    }
}