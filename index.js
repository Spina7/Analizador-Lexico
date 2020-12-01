function clearBox()
{
    document.getElementById('resultado').innerHTML = "";
}

function Analizar(){
    clearBox();
var expresion = document.getElementById('expresion');
var resultado = document.getElementById('resultado');
var array = expresion.value.split(/\s+/);
var array2;

var a=0;

for (var i in array)
{
    ////////////////PALABRAS RESERVADAS////////////////
    if(/(for|while|if|true|false|else|case|break)/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Palabra Reservada\n";
    }
    else if(/^[1-9]|[0-9]$/.test(array[i])){
        resultado.innerHTML = resultado.innerHTML + array[i] + " Numero\n";
    }
    else{
        array2 = array[i];
        for (var h in array2){
        if(/([A-Z])?[a-zA-Z]+/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Variable\n";
        }
        else if(/^[1-9]|[0-9]$/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Numero\n";
        }
        else if(/^(bin)[0-1]+$/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Binario\n";
        }
        else if(/^[*]$/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Multiplicacion\n";
        }
        else if(/^[+]$/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Suma\n";
        }
        else if(/^[-]$/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Menos\n";
        }
        else if(/^[/]$/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Division\n";
        }
        else if(/[(|)]/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Parentesis\n";
        }
        else if(/^[>]$/.test(array2[h])){
            resultado.innerHTML = resultado.innerHTML + array2[h] + " Mayor\n";
        }}
    }
}}


