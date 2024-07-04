

//variables 
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez'
let maximosIntentos = 10;



while (numeroUsuario != numeroSecreto) {

    let numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible}, por favor:`));


    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}, Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        } else {
            alert("El número secreto es mayor");
        }
        // Se incrementa el contador cuando no se acierta.
        //intentos = intentos + 1;
        //intentos += intentos + 1;
        intentos++;


        //palabraVeces = "veces";
        if(intentos > maximosIntentos) {
            alert(`Alcanzaste el numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
    
}




/*

//EJERCICIOS 

let nombre = "Juan";
let edad = prompt("Ingresa tu edad");
let = answer = prompt("Cual es el lenguaje de programacion que mas te gusta?");
let valor1 = 3;
let valor2 = 5;
let resultado = valor1 + valor2;
let numero = Math.floor(Math.random()*10)+1
let numero2 = Math.floor(Math.random()*100)+1


console.log(`Bienvenido, ${nombre}`);
alert(`Hola, ${nombre}`);

console.log(answer);

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

console.log(numero);
console.log(numero2);

*/

//EJERCICIOS WHILEE

//CREA UN CONTADOR QE COMIENCE EN 1 Y VAYA HASTA 10 SANDO WHILE Y MUESTRA CADA NUMERO
/*
let contador = 1;
while (contador <= 10) {
    alert (contador);
    contador++;

}

*/

//CREA UN CONTADOR QUUE COMIENCE EN 10 Y VAYA HASTA 0 USANDO WHILE Y NUESTRA CADA NUMERO
/*
let contador = 10;
while (contador >= 0) {
    alert (contador);
    contador--;

}
*/

/*
//CREA UN PROGRAMA DE CUENTA PROGRESIVA. PIDE UN  NUMERO Y CUENTA DESDE 0 HASTA ESE NUMERO UTILIZANDO UN BUCLE WHILE EN LA CONSOLA DEL NAVEGADOR
let numeroMaximo = prompt ("Ingresa un nmero para la cuenta regresiva");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}
console.log("Hola mundo");

*/















// ejercicio 
/*
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    alert('El número secreto era ' + numeroSecreto);
}


solucion:
alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);

*/

/*
//EJERCICIO 1
let Dia = prompt("que dia de la semana es?");

if (Dia === "sabado" || Dia === "domingo") {
    alert("Buen fin de semana");
} else {
    alert("Buena semana");
};
*/

//EJERCICIO 2 


/*
let numeroUsuario = prompt("ingresa un numero");

if (numeroUsuario > 0 ) {
    alert("Tu numero es positivo");
} else {
    alert("Tu numero es negativo");
}

*/

//EJERCICIO 3
/*
let numeroUsuario = prompt("ingresa un numero");

if (numeroUsuario >= 100 ) {
    alert("Felicidades, has ganado");
} else {
    alert("Intentalo nuevamente para ganar");
}
*/

/*
//ejercicio 4
let saldo = 700;
alert(`El saldo de cuenta es de: ${saldo}`);




//ejercicio 5

let nombreUsuario = prompt("Ingresa tu nombre, por favor");

alert(`Bienvenido, ${nombreUsuario}`);
*/