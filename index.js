function clearBox()
{
    document.getElementById('resultado').innerHTML = "";
}

function Analizar(){
    clearBox();
var expresion = document.getElementById('expresion');
var resultado = document.getElementById('resultado');
var array = expresion.value.split(/\s+/);

for (var i in array)
{
    if(/^[a-z]$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " es una variable\n";
    }
    else if(/^[1-9]|[0-9]$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Numero\n";
    }
    else if(/^(bin)[0-1]+$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Binario\n";
    }
    else if(/^[*]$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Multiplicacion\n";
    }
    else if(/^[+]$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Suma\n";
    }
    else if(/^[-]$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Menos\n";
    }
    else if(/^[/]$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Division\n";
    }
    else if(/^[(]$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Parentesis\n";
    }
    ////////////////PALABRAS RESERVADAS////////////////
    else if(/(for|while|if|true|false|else|case|break)/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Palabra Reservada\n";
    }
}}