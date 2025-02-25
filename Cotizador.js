// Variables útiles 
// Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

// Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%

// Recargo
var recargo = 0;
var recargo_total = 0;

// Precio final 
var precio_final = 0;

// Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor: ");
var edad = prompt("¿Cuántos años tiene? Ingrese solamente números: ");

// Verificar si la persona es mayor de edad
var edad_numero = parseInt(edad);

if (edad_numero < 18) {
    alert("Lo sentimos, necesitas ser mayor de edad para optar por el seguro!");
} else {
    var casado = prompt("¿Está usted casad@ actualmente? (SI/NO): ");
    var edad_conyuge_numero = 0;

    // Verificar la edad del cónyuge solo si el usuario está casado/a
    if ("SI" == casado.toUpperCase()) {
        var edad_conyuge = prompt("¿Qué edad tiene su espos@?: ");
        edad_conyuge_numero = parseInt(edad_conyuge);
    }

    var hijos = prompt("¿Tiene hij@s? (SI/NO): ");
    var cantidad_hijos = 0;

    // Verificar la cantidad de hijos solo si el usuario tiene hijos
    if ("SI" == hijos.toUpperCase()) {
        cantidad_hijos = parseInt(prompt("¿Cuántos hij@s tiene? Ingrese solamente números: "));
    }

    // Calcular el recargo dependiendo de la edad del asegurado
    if (edad_numero >= 18 && edad_numero < 25) {
        recargo = precio_base * edad_18;
    } else if (edad_numero >= 25 && edad_numero < 50) {
        recargo = precio_base * edad_25;
    } else if (edad_numero >= 50) {
        recargo = precio_base * edad_50;
    }

    recargo_total += recargo;

    // Calcular el recargo por la edad del cónyuge (si aplica)
    if ("SI" == casado.toUpperCase()) {
        if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
            recargo = precio_base * casado_18;
        } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
            recargo = precio_base * casado_25;
        } else if (edad_conyuge_numero >= 50) {
            recargo = precio_base * casado_50;
        }

        recargo_total += recargo;
    }

    // Calcular el recargo según la cantidad de hijos (si aplica)
    recargo = cantidad_hijos * (precio_base * hijos_recargo);
    recargo_total += recargo;

    // Calcular el precio final
    precio_final = precio_base + recargo_total;

    // Resultado
    alert("Para el asegurado " + nombre);
    alert("El recargo total será de: Q." + recargo_total);
    alert("El precio final será de: Q." + precio_final);
}
