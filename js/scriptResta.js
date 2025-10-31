//Este es mi código js
"use Strinct"
// Resta dos números y devuelve el valor
function resta(valor1, valor2) {

    return valor1 - valor2;

}

// Realiza la operacion de resta
function realizarOperacionResta(){

    // comenzamos con la resta
    console.log('Realizar operacion de resta');

    //obtener numero 1
    var num1 = document.getElementById('txtNumero1').value;
    //console.log('numero1 : '+ num1);
    num1 = Number(num1);

    //obtener numero 2
    var num2 = document.getElementById('txtNumero2').value;
    num2 = Number(num2);

    var resultadoResta = 0;
    
    //realizar la resta
    if(!isNaN(num1) && !isNaN(num2)){

        resultadoResta = resta(num1,num2);

    }else{

        console.log('No puedo hacer la resta');
        return;

    }

    console.log("Resultado resta: " + resultadoResta);

    //mostrar el resultado en etiqueta
    var lblResultado = document.getElementById('resultOp'); // elemento del DOM
    lblResultado.innerHTML = resultadoResta.toFixed(2); // resultado con dos decimales

}


// funcion inicializadora
function init() {

    //obtener la referencia al boton de sumar (btnSumar)
    var btnRestar = document.getElementById('btnRestar');

    btnRestar.addEventListener('click', realizarOperacionResta);

}

// cuando se carga el DOM se llama a init
window.onload = init;