console.log("01_Variables_and_operators");
console.log("Exercise A");
/* a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
suma de ambos números en una 3er variable. */

var a = 5
var b = 5

var c = a + b

console.log("La suma de a + b es", c);


console.log("Exercise B");
/* b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
variable. */

var nombre = "Matias"
var apellido = "Espinosa"

var nombre_y_apellido = nombre + apellido

console.log(nombre_y_apellido);


console.log("Exercise C");
/* c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
del string) guardando el resultado de la suma en una 3er variable (utilizar length). */

var a1 = "Rosario"
var a2 = "Santa Fe"

var a3 = a1.length + a2.length

console.log(a3);