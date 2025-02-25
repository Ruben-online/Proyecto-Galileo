// Variables útiles 
var precio_base = 2000;

// Valores de los recargos 
var edad_18 = 0.1;
var edad_25 = 0.2;
var edad_50 = 0.3;
var casado_18 = 0.1;
var casado_25 = 0.2;
var casado_50 = 0.3;
var hijos_recargo = 0.2;
var propiedad_recargo = 0.35;
var ingreso_recargo = 0.05;

while (true) { 
    // Solicitar nombre o salir
    var nombre = prompt("Ingrese su nombre (o escriba 'Salir' para terminar): ");
    if (nombre.toUpperCase() === "SALIR") {
        alert("Gracias por utilizar el cotizador.");
        break;
    }

    // Solicitar datos
    var edad = parseInt(prompt("¿Cuántos años tiene? Ingrese solamente números: "));
    if (edad < 18) {
        alert("Lo sentimos, necesitas ser mayor de edad para optar por el seguro!");
        continue; // Reinicia el bucle sin calcular la cotización
    }

    var casado = prompt("¿Está usted casad@ actualmente? (SI/NO): ");
    var edad_conyuge_numero = 0;
    if (casado.toUpperCase() === "SI") {
        edad_conyuge_numero = parseInt(prompt("¿Qué edad tiene su espos@?: "));
    }

    var hijos = prompt("¿Tiene hij@s? (SI/NO): ");
    var cantidad_hijos = 0;
    if (hijos.toUpperCase() === "SI") {
        cantidad_hijos = parseInt(prompt("¿Cuántos hij@s tiene? Ingrese solamente números: "));
    }

    var propiedades = parseInt(prompt("¿Cuántas propiedades posee? Ingrese solamente números: "));
    var ingresos = parseFloat(prompt("¿Cuáles son sus ingresos mensuales? Ingrese el valor en quetzales: "));

    // Reiniciar valores de recargo para cada iteración
    var recargo_total = 0;
    var recargo = 0;

    // Recargo por edad del asegurado
    if (edad >= 18 && edad < 25) {
        recargo = precio_base * edad_18;
    } else if (edad >= 25 && edad < 50) {
        recargo = precio_base * edad_25;
    } else if (edad >= 50) {
        recargo = precio_base * edad_50;
    }
    recargo_total += recargo;

    // Recargo por edad del cónyuge
    if (casado.toUpperCase() === "SI") {
        if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
            recargo = precio_base * casado_18;
        } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
            recargo = precio_base * casado_25;
        } else if (edad_conyuge_numero >= 50) {
            recargo = precio_base * casado_50;
        }
        recargo_total += recargo;
    }

    // Recargo por cantidad de hijos
    recargo = cantidad_hijos * (precio_base * hijos_recargo);
    recargo_total += recargo;

    // Recargo por propiedades
    var recargo_propiedades = propiedades * (precio_base * propiedad_recargo);
    recargo_total += recargo_propiedades;

    // Recargo por ingresos
    var recargo_ingresos = ingresos * ingreso_recargo;
    recargo_total += recargo_ingresos;

    // Calcular el precio final
    var precio_final = precio_base + recargo_total;

    // Resultado
    alert("Para el asegurado " + nombre);
    alert("El recargo total será de: Q." + recargo_total.toFixed(2));
    alert("El precio final será de: Q." + precio_final.toFixed(2));
}