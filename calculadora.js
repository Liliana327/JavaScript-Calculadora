const botonNumeros = document.getElementsByName('data-number');
const botonOpera = document.getElementsByName('data-opera');
const botonIgual = document.getElementsByName('data-igual')[0];
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('resultados');
var operacionAcatual = '';
var operacionAnterior = '';
var operacion = undefined;


botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOpera.forEach(function(boton){
    boton.addEventListener('click', function(){
        selecOperation(boton.innerText)
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisplay();
})

botonDelete.addEventListener('click', function(){
    clear();
    actualizarDisplay();
});

function selecOperation(operation){
    if(operacionAcatual === '') return;
    if(operacionAnterior !== ''){
        calcular();
    }
    operacion = operation.toString();
    operacionAnterior = operacionAcatual;
    operacionAcatual = ''; 
}
function calcular(){
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionAcatual)
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        default:
            return;
    }
    operacionAcatual = calculo;
    operacion = undefined;
    operacionAnterior = '';
}
function agregarNumero(num){
    operacionAcatual = operacionAcatual.toString() + num.toString();
    actualizarDisplay();
}

function clear(){
    operacionAcatual = '';
    operacionAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){
    result.value = operacionAcatual;
}
clear();