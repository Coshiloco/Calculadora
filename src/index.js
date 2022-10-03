// Importamos la libreria de Node que permite capturar los datos por consola
import readline from 'readline';
import { promisify } from 'util';
// 1º Capturar la entrada del usuario por consola
const consoleInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Una vez definido el tipo de input y el tipo de output para el usuario
// Definiremos el metodo question de readline
// que tiene dos Paramaetros uno es l question uqe es lo que se va a imprimir por consola
// Como segundo parametro tenemos una funcion de callback donde como parametro vamos a recibir lo que
// Va a introducir el usuario por consola

/* La funcion promisify lo que nos hace es que nos convierte una funcion 
en una promesa que leugo le podemos poner el 
.then y el .catch y todas esas cosas */

const promptQuestion = promisify(consoleInterface.question).bind(consoleInterface)

promptQuestion('Introduce tu operaacion: ').then((userText) => {});

/* Como estaba formulada nuestra hipotesis
cuando imprimimos por consola el parametro de la funcion 
de callback vemos que es aquello que hemos introducido por consola 
pero se nos imprime dos veces dado que nodemon esta reiniciando el servidor 
y lee de esa forma dos veces la entrada por consola 
una solucion es quietar el console.log */

// 2º Validar la entrda y separarla por operadores y operandos
// 3º Realizar la operacion
// 4º Mostrar el resultado por consola
