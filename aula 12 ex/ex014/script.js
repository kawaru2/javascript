function horario() {
    var hora = new Date().getHours();
    var min = new Date().getMinutes();
    if (hora < 6) {
        window.document.getElementById('hora').innerHTML = `Agora são ${hora} horas e ${min} minutos<br>Tenha uma boa madrugada! 🌜⭐`;
    }
    else if (hora < 12) {
        window.document.getElementById('hora').innerHTML = `Agora são ${hora} horas e ${min} minutos<br>Tenha um bom dia!🌞`;
    }
    else if (hora < 18) {
        window.document.getElementById('hora').innerHTML = `Agora são ${hora} horas e ${min} minutos<br>Tenha uma boa tarde! ⛅`;
    }
    else {
        window.document.getElementById('hora').innerHTML = `São ${hora} horas e ${min} minutos<br>Tenha uma boa noite! 🌙🌟`;
    }
}