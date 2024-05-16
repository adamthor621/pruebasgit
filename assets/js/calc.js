//Asociar la función sumar al evento click del botón
let botonSuma = document.getElementsByTagName("button")[0];
botonSuma.addEventListener("click", sumar);

function sumar() {
  //Recojo los valores de los inputs
  let valor1 = document.getElementById("numero1").value;
  let valor2 = document.getElementById("numero2").value;
  let suma = Number(valor1) + Number(valor2);

  //Selecciono el div del resultado
  let divResultado = document.getElementById("resultado");
  //Elimino cualquier tipo de contenido que pueda tener
  divResultado.innerHTML = "";

  //Genero el texto con el resultado
  let textoResultado = document.createTextNode("El resultado es " + suma);
  //Lo añado al div
  divResultado.append(textoResultado);
}
