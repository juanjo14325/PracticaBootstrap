//Este es mi código js
"use Strinct"
/***OPERACION SUMA***/

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


/***OPERACION RESTA***/
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
    var lblResultadoR = document.getElementById('resultOp'); // elemento del DOM
    lblResultadoR.innerHTML = resultadoResta.toFixed(2); // resultado con dos decimales

}

/***OPERACION mULTIPLICACION***/

function multiplicacion(valor1, valor2) {

    return valor1 * valor2;

}

// Realiza la operacion de Multiplicacion
function realizarOperacionMult(){

    // comenzamos con la Multiplicacion
    console.log('Realizar operacion de multiplicacion');

    //obtener numero 1
    var num1 = document.getElementById('txtNumero1').value;
    //console.log('numero1 : '+ num1);
    num1 = Number(num1);

    //obtener numero 2
    var num2 = document.getElementById('txtNumero2').value;
    num2 = Number(num2);

    var resultadoMult = 0;
    
    //realizar la Multiplicacion
    if(!isNaN(num1) && !isNaN(num2)){

        resultadoMult = multiplicacion(num1,num2);

    }else{

        console.log('No puedo hacer la multiplicacion');
        return;

    }

    console.log("Resultado multiplicacion: " + resultadoMult);

    //mostrar el resultado en etiqueta
    var lblResultadoM = document.getElementById('resultOp'); // elemento del DOM
    lblResultadoM.innerHTML = resultadoMult.toFixed(2); // resultado con dos decimales

}
// funcion inicializadora
function init() {

    //obtener la referencia al boton de sumar (btnSumar)
    var btnSumar = document.getElementById('btnSumar');

    btnSumar.addEventListener('click', realizarOperacionSuma);

    //obtener la referencia al boton de multiplicar (btnMultiplicar)
    var btnRestar = document.getElementById('btnRestar');

    btnRestar.addEventListener('click', realizarOperacionResta);

    //obtener la referencia al boton de multiplicar (btnMultiplicar)
    var btnMultiplicar = document.getElementById('btnMultiplicar');

    btnMultiplicar.addEventListener('click', realizarOperacionMult);

}

// cuando se carga el DOM se llama a init
window.onload = init;