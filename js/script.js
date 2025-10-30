//Este es mi código js
"use Strinct"
// Suma dos números y devuelve el valor
function suma(valor1, valor2) {

    return valor1 + valor2;

}

// Realiza la operacion de suma
function realizarOperacionSuma(){

    // comenzamos con la suma
    console.log('Realizar operacion de suma');

    //obtener numero 1
    var num1 = document.getElementById('txtNumero1').value;
    //console.log('numero1 : '+ num1);
    num1 = Number(num1);

    //obtener numero 2
    var num2 = document.getElementById('txtNumero2').value;
    num2 = Number(num2);

    var resultadoSuma = 0;
    
    //realizar la suma
    if(!isNaN(num1) && !isNaN(num2)){

        resultadoSuma = suma(num1,num2);

    }else{

        console.log('No puedo hacer la suma');
        return;

    }

    console.log("Resultado suma: " + resultadoSuma);

    //mostrar el resultado en etiqueta
    var lblResultado = document.getElementById('resultOp'); // elemento del DOM
    lblResultado.innerHTML = resultadoSuma.toFixed(2); // resultado con dos decimales

}


// funcion inicializadora
function init() {

    //obtener la referencia al boton de sumar (btnSumar)
    var btnSumar = document.getElementById('btnSumar');

    btnSumar.addEventListener('click', realizarOperacionSuma);

}

// cuando se carga el DOM se llama a init
window.onload = init;