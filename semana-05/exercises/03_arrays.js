console.log("Arrays");
console.log("Exercise A");
/*a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los
meses 5 y 11 (utilizar console.log).*/

var array1= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(array1[5],array1[10]);

console.log("Exercise B");
/*b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).*/
console.log(array1.sort());

console.log("Exercise C");
/*c. Agregar un elemento al principio y al final del array (utilizar unshift y push).*/
console.log(array1.unshift("lunes"));
console.log(array1.push("domingo"));
console.log(array1);

console.log("Exercise D");
/*d. Quitar un elemento del principio y del final del array (utilizar shift y pop).*/
console.log(array1.shift(0));
console.log(array1.pop(0));
console.log(array1);

console.log("Exercise E");
/*e. Invertir el orden del array (utilizar reverse).*/
console.log(array1.reverse(0));

console.log("Exercise F");
/*f. Unir todos los elementos del array en un único string donde cada mes este separado por
un guión - (utilizar join).*/
console.log(array1.join("-"));

console.log("Exercise G");
/*g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar
slice).*/
var array2= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var arrayCopy = array2.slice(4,11)
console.log(arrayCopy);
