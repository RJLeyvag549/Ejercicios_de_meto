///Ejercicio 1///
const nombre = "Roberto";
const edad = 21;
let mascotas = true;
console.log(`Ejercicio 1
Nombre: ${nombre}
Edad: ${edad}
Tiene mascotas?: ${mascotas}\n`);

///Ejercicio 2///
let a = 10;
let b = 2;
console.log('Ejercicio 2')
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)

///Ejercicio 3///
function recibirNombre(nombre){
  return `Hola ${nombre}, como estas\n`;
}
console.log(`\nEjercicio 3\n ${recibirNombre("Roberto")}`)

//Ejercicio 4///
const frutas = ['Pera','Manzana','Frutilla','Naranja','Arandano'];
console.log("Ejercicio 4\nNombres de frutas: ");
for(let i = 0; i < frutas.length; i++){
  console.log(frutas[i])
}
//Ejercicio 5///
const numeros = [3, 14, 9.5];
const numerosMultiplicados = numeros.map(numero => numero * 2);

console.log("\nEjercicio 5\nArray original:", numeros);
console.log("Array multiplicado por 2:", numerosMultiplicados);

//Ejercicio 6///
const Personas = [{Nombre: "Roberto", Edad: 21},
                  {Nombre: "Sergio", Edad: 20},
                  {Nombre: "Walter", Edad: 20
                  }]

console.log("\nEjercicio 6\nNombres de las personas:");
Personas.forEach(persona => console.log(persona.Nombre));

///Ejercicio 7///
var arrayNumeros = [2,8,5,3,7,10,200];
let Mayores = arrayNumeros.filter(mayor => mayor > 5);
console.log("\nEjercicio 7\nNumeros mayores a 5: ", Mayores);

///Ejercicio 8///
var Numeros = [1,2,3,4,5,6,7];
let Suma = Numeros.reduce((total, numero) => {
  return total + numero;
});
console.log("\nEjercicio 8\nLa suma total del array es: ", Suma);

///Ejercicio9///
async function esperarSg() {
  await new Promise(msg => setTimeout(msg, 2000));
  return "Pasaron 2 segundos";
}

async function Mensaje() {
  const mensaje = await esperarSg();
  console.log(mensaje);
}

Mensaje();
