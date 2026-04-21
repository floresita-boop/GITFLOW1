import {saludar, despedir, estadoSistema, sumar, healthCheck, factorial } from "../src/app.js"

function ejecutarPruebas() {
let pasadas =0;
let fallidas = 0;
const r1 = saludar("Rider")
if (r1.includes("Rider")) {
console.log ("test 1 pasado: funcion saludar en CodeRider es correcta")
pasadas++;
}else {
console.log("test 1 fallido: ", r1);
fallidas++;
}
const actualEstado = estadoSistema();
if (actualEstado.estado ==="activo"){
console.log("test 2 pasado: estadoSistema() funciona en CodeRider");

pasadas++;
}else {
console.log("test 2 fallido: ",actualEstado, "en codeRider");
fallidas++;
}
const r3 = sumar(2, 3);
if (r3 === 5) {
  console.log("test 3 pasado: funcion sumar funciona correctamente");
  pasadas++;
} else {
  console.log("test 3 fallido: ", r3);
  fallidas++;
}
const health = healthCheck();
if (health.status=== 'ok'){
  console.log('Test healthCheck pasado');
  pasadas++;
}else {
  console.log('Test  healthCheck fallido', health);
  fallidas++;

}
const f = factorial(5);
if (f === 120) {
    console.log("Test Factorial pasado");
    pasadas++;
} else {
    console.log("Test fallido");
    fallidas++;
}
console.log ("\nResultados: " + pasadas + " pasadas, " + fallidas + "fallidas");
if(fallidas > 0) process.exit(1);
}
ejecutarPruebas();

