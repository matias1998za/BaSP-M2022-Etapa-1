console.log("Functions");
console.log("Exercise A");
/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
la consola del navegador.*/

function suma(p1,p2){
    var total = p1+p2
    console.log(total);
}

suma("hola",9)

console.log("Exercise B");
/*b. A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.*/

function suma(p1,p2){
    var total = p1+p2
    if (typeof(p1)!= "number"||typeof(p2)!= "number") {
        alert("Uno de los dos no es un numero");
        return total = NaN
    }else{
        return console.log(total);
    }
}

suma(5,8)


console.log("Exercise C");
/*c. Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero.*/

function validate(x) {
    return Number.isInteger(x)
  }
console.log(validate(5.5))


console.log("Exercise D");
/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado).*/

function suma(p1,p2){
    var total = p1+p2

    if (typeof(p1)!= "number"||typeof(p2)!= "number") {
        alert("Uno de los dos no es un numero");
        return total = NaN
    }
    if(validate(p1)== false){
        alert("Hubo un error en parametro 1, valor redondeado:"+ Math.round(p1))
    }
    if(validate(p2)== false){
        alert("Hubo un error en en parametro 2, valor redondeado: "+ Math.round(p2))
    }
    else {
        return console.log(total);
    }
}
suma(8,5)

console.log("Exercise E");
/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual.*/

function suma(p1,p2){
    var total = p1+p2
    if (typeof(p1)!= "number"||typeof(p2)!= "number") {
        alert("Uno de los dos no es un numero");
    return total = NaN
    }
    else{
        return partialValidate(p1,p2)
    }
}
function partialValidate(p1,p2) {
    if(validate(p1) && validate(p2)){
        return console.log(p1+p2);
    }else{
        alert("Error, los numeros deben ser enteros")
    };
    return console.log(Math.round(p1+p2));
}
console.log(suma(5,5));
