var hora = new Date().getHours();
var min = new Date().getMinutes();
console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`);
if (hora < 6) {
    console.log(`Boa madrugada!`);
}
else if (hora < 12) {
    console.log(`Bom dia!`);
}
else if (hora < 18) {
    console.log(`Boa tarde!`);
}
else {
    console.log(`Boa noite`);
}