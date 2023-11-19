/*en una variable hacemos queryselector de body ubicamos valores del html especificamnete en el body xk el color del fondo cambie*/
const body = document.querySelector("body");
/*variable para cuando se mueva cambia fondo y boton getElementById xk en el html no se puso clase si no id*/
const toggle = document.getElementById("toggle");

/*el metodo toggle en javascript permite que aun elemento existente al que yo le asigne este metodo por defecto esta en false y cuando lo llame el metodo toggle va a pasar a verdadero y hace su transicion guarda anteriorvalor guarda el ultimo estado*/
/*classlist se utilizo para remover y agregar clases*/
/*cuando escuche el click en este boton entonces me vas hacer un classList y voy a llamar el toggle, variar entre valores on y off */
toggle.addEventListener("click",() => {
    toggle.classList.toggle("toggleBlanco");
    body.classList.toggle("toggleBlanco");/*tambien vamos a cambiar en fondo, no estan creadas las clases en los html xk en css se crea */
});