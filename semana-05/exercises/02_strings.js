console.log("02_strings");
console.log("Exercise A");
/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase). */
var a = "electromecanico"
console.log(a.toUpperCase());


console.log("Exercise B");
/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring). */
var b = "hermeticamente"
b_1 = b.substring(0,5)
console.log(b_1);

console.log("Exercise C");
/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring). */
var c = "electrones"
c_1 = c.substring(7,10)
console.log(c_1);

console.log("Exercise D");
/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +). */
var d = "aleaciones"
var d_1 = d.substring(0,1).toUpperCase(0) + d.substring(1,8).toLowerCase(0);
console.log(d_1);
console.log("Exercise E");

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf).*/
var e = "Entre Rios"
var e_1 = e.indexOf(" ")
console.log(e_1);

console.log("Exercise F");
/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador
+).*/

var f = "javascript development"

var f_1 = f.substring(0,1).toUpperCase(0) +
          f.substring(1,10).toLowerCase(0)+
          f.indexOf(" ", +1)+
          f.substring(11,12).toUpperCase(0)+
          f.substring(12,23).toLowerCase(0);

console.log(f_1);
