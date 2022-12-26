//  EXERCICIO  - HORA CERTA - 




function mostrarHora() {

    var element_msg = document.getElementById('msg')

    var element_imagem = document.getElementById('imagem');

    var horas = new Date();
    var horaAtual = horas.getHours()




    if (horaAtual >= 0 && horaAtual < 12) {
        element_msg.innerHTML = (`Bom dia !! <br> ${horas}`);

        element_imagem.src = "../img/foto-manha_800x400.jpg"

    } else if (horaAtual >= 12 && horaAtual < 18) {
        element_msg.innerHTML = (`Boa tarde !! <br> ${horaAtual}`);

        element_imagem.src = "../img/foto-tarde_800x400.jpg"

    } else if (horaAtual >= 18 && horaAtual < 23) {
        element_msg.innerHTML = (`Boa Noite !! <br> ${horaAtual}`);

        element_imagem.src = "../img/foto-noite_800x400.jpg"

    } else {
        element_msg.innerHTML = (`Ja é madrugada <br> ${horaAtual}`);
    }



}