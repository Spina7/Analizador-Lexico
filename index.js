function clearBox() {
    document.getElementById('resultado').innerHTML = "";
}

function Analizar() {
    clearBox();
    var expresion = document.getElementById('expresion').value;
    var resultado = document.getElementById('resultado');
    expresion = expresion.replace(/ /g, "");
    var estado = 0;
    console.log(expresion.length);
    for (let i = 0; i < expresion.length + 1; i++) {
        switch (estado) {
            case 0:
                if (expresion.charAt(i) == 'i') {
                    if (expresion.charAt(i + 1) == 'f') {
                        estado = 4;
                        resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + expresion.charAt(i + 1) + "' es una Palabra reservada    " + estado + "\n";
                        i = i + 1;
                    } else {
                        estado = 1;
                        resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra        " + estado + "\n";
                    }
                } else if (expresion.charAt(i) == '+') {
                    estado = 3;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo positivo    " + estado + "\n";

                } else if (expresion.charAt(i) == '-') {
                    estado = 3;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un signo negativo    " + estado + "\n";

                } else if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 105)) ||
                    ((expresion.charCodeAt(i) > 105) && (expresion.charCodeAt(i) < 123))) {
                    estado = 2;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra         " + estado + "\n";

                } else if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 5;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else if (expresion.charAt(i) == '\s') {
                    estado = estado;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual\n";
                }
                break;
            case 1:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 2;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra         " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 2:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 20;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una letra de la variable" + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 3:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 5;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 4:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 2;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una Letra         " + estado + "\n";

                } else if (expresion.charAt(i) == '(') {
                    estado = 6;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de apertura    " + estado + "\n";

                } else if (expresion.charAt(i) == 32) {
                    i = i + 1;
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actualkk\n";
                }
                break;
            case 5:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 5;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else if (expresion.charAt(i) == '.') {
                    estado = 6;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       punto decimal    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 6:
                if (expresion.charAt(i) == '(') {
                    estado = 8;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de apertura    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 7:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 9;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
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
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 9:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 9;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
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
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 11:
                if (expresion.charAt(i) == '=') {
                    estado = 13;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de cierre    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 12:
                if (expresion.charAt(i) == '=') {
                    estado = 13;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de cierre    " + estado + "\n";

                } else if (expresion.charAt(i) == ')') {
                    estado = 15; //no esta en el diagrama
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de cierre    " + estado + "\n";

                } else if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 12; //no esta en el diagrama
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 13:
                if (((expresion.charCodeAt(i) > 64) && (expresion.charCodeAt(i) < 91)) ||
                    ((expresion.charCodeAt(i) > 96) && (expresion.charCodeAt(i) < 123))) {
                    estado = 10;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una letra de la variable" + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 14:

                break;
            case 15:
                if (expresion.charAt(i) == '&') {
                    estado = 16;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una un simbolo AND" + estado + "\n";
                } else if (expresion.charAt(i) == '|') {
                    estado = 17;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una un simbolo OR" + estado + "\n";
                } else if (expresion.charAt(i) == ')') {
                    estado = 19;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de cierre    " + estado + "\n";
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 16:
                if (expresion.charAt(i) == '&') {
                    estado = 18;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es una un simbolo AND" + estado + "\n";
                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 18:
                if (expresion.charAt(i) == '(') {
                    estado = 8;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de apertura    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
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
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
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
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;
            case 22:
                if ((expresion.charCodeAt(i) > 47) && (expresion.charCodeAt(i) < 58)) {
                    estado = 22;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       es un Digito         " + estado + "\n";

                } else if (expresion.charAt(i) == '(') {
                    estado = 15;
                    resultado.innerHTML = resultado.innerHTML + "'" + expresion.charAt(i) + "'       parentesis de apertura    " + estado + "\n";

                } else {
                    resultado.innerHTML = resultado.innerHTML + "Entrada no valida al sistema desde el estado actual";
                }
                break;

        }
    }
}