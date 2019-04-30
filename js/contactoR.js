function myFunction() {
  var txt;
  var nombre = prompt("¿Como te llamas?") 
  var numero = prompt("Escribe tu numero y nosotros nos comunicamos contigo si tienes alguna duda adicional", " . . . ");
  if (numero == null || numero == "") {
    txt = "Prompt cancelado";
  } else {
    txt = alert(nombre + ", en seguida te llamamos");
  }
  document.getElementById("demo").innerHTML = txt;
}