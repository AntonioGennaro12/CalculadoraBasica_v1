/* Para ejercitarFuncionesy Procedimientos 
intenti hacer una calculadora color #951dfc1
*/
const miCalcula = document.querySelector("#mi-calcula");
const Resultado = document.querySelector("#mi-result");
const clearTodo = document.querySelector("#mi-clear");

var   result    = 0;
var   contador  = 0;

/* funciones */
function suma   (op1, op2){return op1+op2;} 
function resta  (op1, op2){return op1-op2;} 
function multi  (op1, op2){return op1*op2;} 
function divid  (op1, op2){return op1/op2;} 
function porc   (op1, op2){return (op1*op2)/100;}
function pote   (bas, exp){return Math.pow (bas, exp);} 
function raiz   (bas, exp){return Math.pow (bas, (1/exp));}

/* procedimiento*/
function mueRes (resul) {
    resul = resul.toFixed(10);
    let resto = resul % 1;
    if (resto === 0) { resul = parseFloat(resul);}
    Resultado.textContent = "Resultado = "+resul+"";
    Resultado.style.background = "rgb(0, 128, 20)";
    result = resul;
}

/* Borra todo incluso resultado */
function borratodo ( ) {
    document.getElementById("numero1").value = "";
    document.getElementById("numero2").value = "";
    document.getElementById("operacion").value = "";
    Resultado.textContent = "Resultado";
}

/* MANEJO DE LOS BOTONES */

/* Calcula */
miCalcula.addEventListener("click", () => {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    var oper = document.getElementById("operacion").value;

    switch(oper){
        case    "+": mueRes (suma  (num1, num2)); break;
        case    "-": mueRes (resta (num1, num2)); break;
        case    "x": 
        case    "X": 
        case    "*": mueRes (multi (num1, num2)); break;
        case    "d":
        case    "D":
        case    "/": mueRes (divid (num1, num2)); break;
        case    "%": mueRes (porc  (num1, num2)); break;
        case    "p":
        case    "P": mueRes (pote  (num1, num2)); break;
        case    "r": 
        case    "R": mueRes (raiz  (num1, num2)); break;
        default: Resultado.textContent = "Operación no definida";
     };


    miCalcula.textContent = "Hacer otra cuenta";
    miCalcula.style.background = "rgb(30, 30, 220)";
    contador  = 0;
    });

/* Carga el resultado */
Resultado.addEventListener("click", () => {
    if (contador  <= 1){
    document.getElementById("numero1").value = result;
    contador++;
    }
    else { 
        borratodo();
    }
});

/* Borra todos los labels  */ 
clearTodo.addEventListener("click", () => {
    borratodo ();
    clearTodo.style.background = "rgb(190, 0, 0)";
}); 