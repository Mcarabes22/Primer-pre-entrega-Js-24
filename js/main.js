// Actividades

/*

Dentro del mismo archivo main.js pueden resolver las actividades.

Aquí solamente estarán las consignas, pueden llevárselas para allá o ir moviéndose entre archivos.
Son pocas actividades ya que no hay mucho contenido.

1. Realizar un algoritmo que solicite al menos tres datos personales al usuario (pueden ser nombre, apellido, documento, teléfono, correo, etc.) y muéstrenlo en un alert.
2. Realizar un algoritmo que solicite tres números A B y C y devuelva la siguiente operación:
- (A - B) * C
Mostrar un mensaje acorde al final del cálculo.
3. Supongamos que llegamos a la casa de un amigo. Crear un algoritmo que nos ayude a pensar el saludo que vamos a hacer. Tenemos que ingresar el nombre de nuestro amigo y mostrar por alert un mensaje adecuado.

Ejemplo: ingreso en la casa de mi amigo Jorge y el mensaje por alert podría ser "Qué onda, Jorge? Todo bien?"

*/

// let nombreUsuario
// let edadUsuario
// let emailUsuario

// nombreUsuario = "Pedro"
// edadUsuario = "28"
// emailUsuario = "Pedro@gmail.com"

// console.log(nombreUsuario, edadUsuario, emailUsuario);


// const nombreUsuario = prompt("ingrese su nombre")
// const edadUsuario = prompt("ingrese su edad")
// const emailUsuario = prompt("ingrese su email")

// const datosIngresados = "sus datos ingresados son: " + nombreUsuario + " " + edadUsuario + " " + emailUsuario;

// alert(datosIngresados);

// console.log(nombreUsuario, edadUsuario, emailUsuario);

// const numeroA = parseInt(prompt("ingrese un numero"));
// const numeroB = parseInt(prompt("ingrese un numero"));
// const numeroC = parseInt(prompt("ingrese un numero"));

// const resta = numeroA - numeroB
// const resultadoResta = resta

// const multiplicacion = resta * numeroC


// const resultadoFinal = "la resta entre " + numeroA  + " y " + numeroB + " " + "da como resultado: " + resultadoResta + " y la multiplicacion de esta resta por " + "" + numeroC + " da como resultado final: " + multiplicacion

// alert(resultadoFinal);

// console.log(resultadoFinal);

// const saludoAmigo = alert("Hola, ¿Como vas a saludar a Tito hoy?");
// const tipoDeSaludo = prompt("Amistoso, Misterioso o Mimoso")
// const pregunta = confirm("Desea saludar de esta manera?");

// alert("Haz saludado a tito")

// console.log(tipoDeSaludo);

//Calificación del estudiante:

// Ejercicio 1: Escribe un programa que tome la calificación de un estudiante como entrada y muestre por consola si el estudiante aprobó o no. Un estudiante aprueba si la calificación es mayor o igual a 60. 

// const calificacion = parseInt(prompt("Ingrese su nota"));

// if (calificacion >= 60) {
//         alert("Felicidades, usted ha aprobado.");
// } else {
//         alert("Usted ha desaprobado.");


// 

let marcas;

function elegiTuBebida() {
        let bebidas;
        do {
                bebidas = parseInt(prompt("Hola! Por favor selecciona tu bebida favorita:\n1. Fanta\n2. Coca-Cola\n3. Sprite\n4. Pepsi\n5. Manaos\n6. Pritty"));
                switch (bebidas) {
                        case 1:
                                marcas = "Fanta";
                                break;
                        case 2:
                                marcas = "Coca-Cola";
                                break;
                        case 3:
                                marcas = "Sprite";
                                break;
                        case 4:
                                marcas = "Pepsi";
                                break;
                        case 5:
                                marcas = "Manaos";
                                break;
                        case 6:
                                marcas = "Pritty";
                                break;
                        default:
                                alert("Por favor, selecciona una opción válida.");
                }
        } while (isNaN(bebidas) || bebidas < 1 || bebidas > 6);
        console.log("Has seleccionado:", marcas);
}

function preguntarOtraVez() {
        return confirm("Has seleccionado " + marcas + ". ¿Deseas elegir otra bebida?");
}


elegiTuBebida();


while (preguntarOtraVez()) {
        elegiTuBebida();
}

alert("Gracias por tu selección.");

