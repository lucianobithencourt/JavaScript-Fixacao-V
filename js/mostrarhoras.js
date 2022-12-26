//  EXERCICIO  - HORA CERTA - 




function mostrarHora() {

    var element_msg = document.getElementById('msg')
    var element_img = document.getElementById('imagem')

    var horasSis =  new Date();

    var horas=horasSis.getHours();
    var minutos=horasSis.getMinutes(0);

    // var horas = 19
    // var minutos = 27


    if (horas >= 0 && horas < 12) {
        element_msg.innerHTML = (`Bom dia !! - ${horas}h${minutos}`)
        element_img.src='../img/foto-manha.png'
        element_img.style.backgroundColor = "yellow"

    } else if (horas >=12 && horas < 18) {
        element_msg.innerHTML = (`Boa Tarde!! - ${horas}h${minutos}`)
        element_img.src='../img/foto-tarde.png'

    } else if (horas >=12 && horas < 18) {
        element_msg.innerHTML = (`Boa Tarde!! - ${horas}h${minutos}`)
        element_img.src='../img/foto-tarde_800x400.jpg'
    
    } else  if (horas >=19 && horas <=23) {
        element_msg.innerHTML = (`Boa Noite!! - ${horas}h${minutos}`)
        element_img.src='../img/foto-noite.png'
        element_img.style.backgroundColor = "yellow"
        
    }

}