console.log("05 for");
console.log("Exercise A");
/*a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de
JavaScript para mostrar una alerta utilizando cada una de las palabras.

var a = ["manzana", "naranja", "kiwi", "sandia", "lima"];
for (var index = 0; index < a.length; index++) {
    alert(a[index])
}

console.log("Exercise B");
/*b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una
alerta por cada palabra modificada.

var toUpperCase = [];
var toLowerCase = [];
for (var index = 0; index < a.length; index++) {
    toUpperCase[index] = a[index].substring(0,1).toUpperCase();
    toLowerCase[index] = a[index].substring(1, ).toLowerCase();
    toUpperCase[index] = toUpperCase[index] + toLowerCase[index];
    alert(toUpperCase[index])
}
console.log(toUpperCase);

console.log("Exercise C");
/*c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto
a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable
sentence. Al final mostrar una única alerta con la cadena completa.

var sentence= "";
var b = ["manzana", "naranja", "kiwi", "sandia", "lima"]
for(index = 0;index <=b.length-1; index++){
    sentence +=b[index]
}
alert(sentence)
*/
console.log("Exercise D");
/*d. Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número
de la repetición, es decir que al final de la ejecución del bucle for debería haber 10
elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola
del navegador el array final (utilizar console.log).*/

var c = []
for(index = 0;index <= 9; index++){
    console.log(c.push(index))
}
console.log(c);