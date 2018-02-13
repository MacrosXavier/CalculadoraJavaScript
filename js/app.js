//Declaramos variables
var operandoa;
var operandob;
var operacion;

function inicio(){

  var resultado = document.getElementById('display');
  var reset = document.getElementById('on');
  var signo = document.getElementById('sign');
  var suma = document.getElementById('mas');
  var resta = document.getElementById('menos');
  var multiplicacion = document.getElementById('por');
  var division = document.getElementById('dividido');
  var igual = document.getElementById('igual');
  var punto = document.getElementById('punto');
  var uno = document.getElementById('1');
  var dos = document.getElementById('2');
  var tres = document.getElementById('3');
  var cuatro = document.getElementById('4');
  var cinco = document.getElementById('5');
  var seis = document.getElementById('6');
  var siete = document.getElementById('7');
  var ocho = document.getElementById('8');
  var nueve = document.getElementById('9');
  var cero = document.getElementById('0');
  var tecla = document.getElementsByClassName('tecla');
  var teclado = document.getElementsByClassName('teclado');
  var i = 0;
  var digitos = 8;
  var banderapunto = true;
  var banderasigno = true;
  var tecla = "";
  var resultadodigitos= 0;

  //Eventos de click

  punto.onclick = function(e){
    if (resultado.textContent.length < 8 && banderapunto == true ){
      resultado.textContent = resultado.textContent + ".";
      banderapunto = false;
    }
    pulsarBoton(punto);
  }
  signo.onclick = function(e){
    if (resultado.textContent != "0" && banderasigno == true ){
      resultado.textContent = "-" + resultado.textContent;
      banderasigno = false;
    }else {
      resultado.textContent = resultado.textContent.replace("-","");
      banderasigno = true;
    }
    pulsarBoton(signo);
  }
  uno.onclick = function(e){
    tecla = "1"
    borrarCero();
    ochoDigitos(tecla);
    pulsarBoton(uno);
  }
  dos.onclick = function(e){
      tecla = "2"
      borrarCero();
      ochoDigitos(tecla);
      pulsarBoton(dos);
  }
  tres.onclick = function(e){
      tecla = "3"
      borrarCero();
      ochoDigitos(tecla);
      pulsarBoton(tres);
  }
  cuatro.onclick = function(e){
      tecla = "4"
      borrarCero();
      ochoDigitos(tecla);
      pulsarBoton(cuatro);
  }
  cinco.onclick = function(e){
      tecla = "5"
      borrarCero();
      ochoDigitos(tecla);
      pulsarBoton(cinco);
  }
  seis.onclick = function(e){
      tecla = "6"
      borrarCero();
      ochoDigitos(tecla);
      pulsarBoton(seis);
  }
  siete.onclick = function(e){
      tecla = "7"
      borrarCero();
      ochoDigitos(tecla);
      pulsarBoton(siete);
  }
  ocho.onclick = function(e){
      tecla = "8"
      borrarCero();
      ochoDigitos(tecla);
      pulsarBoton(ocho);
  }
  nueve.onclick = function(e){
      tecla = "9"
      borrarCero();
      ochoDigitos(tecla);
      pulsarBoton(nueve);
  }
  cero.onclick = function(e){
    if (resultado.textContent.length < 8) {
      if (resultado.textContent != "0") {
          resultado.textContent = resultado.textContent  + "0";
      }
    }else {
      resultado.textContent = resultado.textContent;
    }
    pulsarBoton(cero);
  }

  reset.onclick = function(e){
      resetear();
      pulsarBoton(reset);
  }
  suma.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "+";
      limpiar();
      banderapunto = true;
      suma.style = "padding-top:; padding-bottom:2px; padding-left:2px; padding-right:2px; margin-bottom:12px;"
      setInterval(function(){suma.style = "padding-top:0px; padding-bottom:0px; padding-left:0px; padding-right:0px;"},250)
  }
  resta.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "-";
      limpiar();
      banderapunto = true;
      pulsarBoton(resta);
  }
  multiplicacion.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "*";
      limpiar();
      banderapunto = true;
      pulsarBoton(multiplicacion);
  }
  division.onclick = function(e){
      operandoa = resultado.textContent;
      operacion = "/";
      limpiar();
      banderapunto = true;
      pulsarBoton(division);
  }
  igual.onclick = function(e){
      operandob = resultado.textContent;
      resolver();
      banderapunto = true;
      pulsarBoton(igual);
  }

  function pulsarBoton(boton){
    boton.style = "padding-top:2px; padding-bottom:2px; padding-left:2px; padding-right:2px;"
    setInterval(function(){boton.style = "padding-top:0px; padding-bottom:0px; padding-left:0px; padding-right:0px;"},250)

  }

  function borrarCero(){
    if(resultado.textContent == "0"){
      resultado.textContent = "";
    }
  }

  function ochoDigitos(t){
    if (resultado.textContent.length < digitos) {
      resultado.textContent = resultado.textContent  + t;
    }

    if (resultado.textContent[i] == ".") {
      digitos = 9;
    }
    i = i + 1;
  }

  function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "0";
    operandoa = 0;
    operandob = 0;
    operacion = "";
    i = 0;
    digitos = 8
    banderapunto = true;
    banderasigno = true;
    tecla = "";
    resultadodigitos = 0;
  }

  function resultadoOchoDigitos(result) {

  }

  function resolver(){
  var res = 0;
  switch(operacion){
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
  var aux =0;
  resultadodigitos = resultado.textContent.length;
  if ( res % 1 == 0) {
        resultado.textContent = res;
    } else {
        if (resultadodigitos > 9) {
            aux = resultadodigitos - 9;
            resultado.textContent = resultado.textContent.substring(0, aux);

      }

    }

  }

}
