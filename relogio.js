let htmlHoras = document.getElementById("horas");
let htmlMinutos = document.getElementById("minutos");
let htmlSegundos = document.getElementById("segundos");

let data = new Date();
let segundos = data.getSeconds();
let minutos = data.getMinutes();
let horas = data.getHours();

setInterval(() => {
  segundos++;

  if (segundos > 59) {
    segundos = 0;
    minutos++;
  }
  if (minutos > 59) {
    segundos = 0;
    minutos = 0;
    horas++;
  }
  if (horas > 23) {
    horas = 0;
    minutos = 0;
    segundos = 0;
  }

  if (segundos < 10) {
    segundos = `0${segundos}`;
  }

  htmlHoras.textContent = horas;
  htmlMinutos.textContent = minutos;
  htmlSegundos.textContent = segundos;

  if (minutos < 10) {
    htmlMinutos.textContent = `0${minutos}`;
  }
  if (horas < 10) {
    htmlHoras.textContent = `0${horas}`;
  }
}, 999);
