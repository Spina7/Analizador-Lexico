function clearBox() {
    document.getElementById('resultado').innerHTML = "";
}

var input = document.querySelector('#clear');
var textarea = document.querySelector('#expresion');

input.addEventListener('click', function() {
    clearBox();
    textarea.value = '';
}, false);

function Analizar() {
    clearBox();
    var expresion = document.getElementById('expresion').value;
    var resultado = document.getElementById('resultado');
    expresion = expresion.replace(/ /g, "");
    var estado = 0;
    var aceptacion = 0;
    var tipo = 0;
    var signo = 0;


    console.log(expresion.length);
    for (let i = 0; i < expresion.length; i++) {
        switch (estado) {
            case 0:
                if (expresion.charAt(i) == 'i') {
                    if (expresion.charAt(i + 1) == 'f') {
                        estado = 4;
                        resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + expresion.charAt(i + 1) + "'      es una Palabra reservada  " + estado + "\n";
                        i = i + 1;
                        aceptacion = 0;
                        tipo = 0;
                    } else {
                        estado = 1;
                        resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra        " + estado + "\n";
                        aceptacion = 1;
                        tipo = 1;
                    }
                } else if (expresion.charAt(i) == '+') {
                    estado = 3;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo positivo    " + estado + "\n";
                    signo = 1;
                    aceptacion = 0;
                    tipo = 0;
                } else if (expresion.charAt(i) == '-') {
                    estado = 3;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo negativo    " + estado + "\n";
                    signo = 2;
                    aceptacion = 0;
                    tipo = 0;
                } else if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 105)) ||
                    ((expresion.charCodeAt(i) > 105) && (expresion.charCodeAt(i) < 123))) {
                    estado = 2;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra         " + estado + "\n";
                    aceptacion = 1;
                    tipo = 1;
                } else if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 5;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";
                    aceptacion = 1;
                    tipo = 2;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 1:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 2;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra         " + estado + "\n";
                    aceptacion = 1;
                    tipo = 1;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 2:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 2;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra         " + estado + "\n";
                    aceptacion = 1;
                    tipo = 1;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 3:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 5;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";
                    aceptacion = 1;
                    tipo = 2;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 4:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 2;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra         " + estado + "\n";
                    aceptacion = 1;
                    tipo = 1;
                } else if (expresion.charAt(i) == '(') {
                    estado = 6;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de apertura    " + estado + "\n";
                    aceptacion = 0;
                    tipo = 0;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 5:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 5;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else if (expresion.charAt(i) == '.') {
                    estado = 7;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       punto decimal        " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 6:
                if (expresion.charAt(i) == '(') {
                    estado = 8;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de apertura    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 7:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 9;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";
                    aceptacion = 1;
                    tipo = 3;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 8:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 21;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 20;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una letra de la variable" + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 9:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 9;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 10:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 10;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una letra de la variable" + estado + "\n";

                } else if (expresion.charAt(i) == ')') {
                    estado = 15;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de cierre    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 11:
                if (expresion.charAt(i) == '=') {
                    estado = 13;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de cierre    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 12:
                if (expresion.charAt(i) == '=') {
                    estado = 13;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de cierre    " + estado + "\n";

                } else if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 10;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una letra de la variable       " + estado + "\n";

                } else if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 22; //no esta en el diagrama
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito              " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 13:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 10;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una letra de la variable       " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 14:

                break;
            case 15:
                if (expresion.charAt(i) == '&') {
                    estado = 16;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una un simbolo AND     " + estado + "\n";
                } else if (expresion.charAt(i) == '|') {
                    estado = 17;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una un simbolo OR     " + estado + "\n";
                } else if (expresion.charAt(i) == ')') {
                    estado = 19;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de cierre      " + estado + "\n";
                    aceptacion = 1;
                    tipo = 4;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 16:
                if (expresion.charAt(i) == '&') {
                    estado = 18;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una un simbolo AND     " + estado + "\n";
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                }
                break;
            case 17:
                if (expresion.charAt(i) == '|') {
                    estado = 18;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una un simbolo AND     " + estado + "\n";
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 18:
                if (expresion.charAt(i) == '(') {
                    estado = 8;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de apertura    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 19:
                resultado.innerHTML = resultado.innerHTML + "'" + estado + "'       ESTADO DE ACEPTACION    \n";
                break;
            case 20:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 20;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra         " + estado + "\n";

                } else if (expresion.charAt(i) == '=') {
                    estado = 11;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo igual         " + estado + "\n";
                } else if (expresion.charAt(i) == '!') {
                    estado = 11;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo de admiracion         " + estado + "\n";
                } else if (expresion.charAt(i) == '<') {
                    estado = 12;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo menor         " + estado + "\n";
                } else if (expresion.charAt(i) == '>') {
                    estado = 12;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo mayor         " + estado + "\n";
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 21:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 21;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else if (expresion.charAt(i) == '=') {
                    estado = 11;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo igual         " + estado + "\n";
                } else if (expresion.charAt(i) == '!') {
                    estado = 11;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo de admiracion         " + estado + "\n";
                } else if (expresion.charAt(i) == '<') {
                    estado = 12;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo menor         " + estado + "\n";
                } else if (expresion.charAt(i) == '>') {
                    estado = 12;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo mayor         " + estado + "\n";
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;
            case 22:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 22;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito              " + estado + "\n";

                } else if (expresion.charAt(i) == ')') {
                    estado = 15;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de apertura    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                    aceptacion = 0;
                    tipo = 0;
                }
                break;

        }
    }
    /*
    signo
    1 positivo
    2 negativo


    tipo
    0 no valido
    1 expresi�n regular
    2 Entero
    3 Flotante
    4 Expresiones selectivas simple*/
    if (aceptacion == 0) {
        resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de no aceptacion ";
    } else {
        if (tipo == 1) {
            resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de aceptacion, Se ha reconocido una expresion regular ";
        } else if (tipo == 2) {
            if (signo == 0) {
                resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de aceptacion, Se ha reconocido un entero sin signo";
            } else if (signo == 1) {
                resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de aceptacion, Se ha reconocido un entero positivo";
            } else if (signo == 2) {
                resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de aceptacion, Se ha reconocido un entero negativo";
            }
        } else if (tipo == 3) {
            if (signo == 0) {
                resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de aceptacion, Se ha reconocido un flotante sin signo";
            } else if (signo == 1) {
                resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de aceptacion, Se ha reconocido un flotante positivo";
            } else if (signo == 2) {
                resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de aceptacion, Se ha reconocido un flotante negativo";
            }
        } else if (tipo == 4) {
            resultado.innerHTML = resultado.innerHTML + "La lectura a la entrada ha finalizado en un estado de aceptacion, Se ha reconocido una Expresiones selectivas simple ";
        }
    }
}