const horas = document.getElementById('horas');  // vincula na ID "horas" do span no HTML 
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// const == variavel

const relogio = setInterval 
(function time(){
    let dateToday = new Date();

    let hr = dateToday.getHours(); // daytoday == data de hoje  &&  gethours == pegar a hora
    let min = dateToday.getMinutes(); 
    let s = dateToday.getSeconds();


    if(hr < 10) hr = '0' + hr;  // se (hr < 10) hr = " 0 " na frente do valor da variavel "hr"

    if(min < 10) min = '0' + min;  // se (min < 10) hr = " 0 " na frente do valor da variavel "min"

    if(s < 10) s = '0' + s; // se (s < 10) hr = " 0 " na frente do valor da variavel "s"


    // adiciona o valor das variaveis LET nas variaveis do HTML
        horas.textContent = hr;
        minutos.textContent = min;
        segundos.textContent = s;


                }
)



