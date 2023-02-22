function horario() {
    var hora = new Date().getHours();
    var min = new Date().getMinutes();
    if (hora < 6) {
        window.document.getElementById('hora').innerHTML = `Agora são ${hora} horas e ${min} minutos<br>Tenha uma boa madrugada! 🌜⭐`;
        window.document.getElementById('img').src = 'Noite.png';
        window.document.body.style.background = `#090446`;
    }
    else if (hora < 12) {
        window.document.getElementById('hora').innerHTML = `Agora são ${hora} horas e ${min} minutos<br>Tenha um bom dia!🌞`;
        window.document.getElementById('img').src = `Manhã2.png`;
        window.document.body.style.background = `#6494aa`;
    }
    else if (hora < 19) {
        window.document.getElementById('hora').innerHTML = `Agora são ${hora} horas e ${min} minutos<br>Tenha uma boa tarde! ⛅`;
        window.document.getElementById(`img`).src = `Tarde.png`;
        window.document.body.style.background = `#a41e3d`;
    }
    else {
        window.document.getElementById('hora').innerHTML = `São ${hora} horas e ${min} minutos<br>Tenha uma boa noite! 🌙🌟`;
        window.document.getElementById(`img`).src = `Noite.png`;
        window.document.body.style.background = `#22162b`;
    }
}