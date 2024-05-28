/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/


/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("ESERCIZIO 1");
const pets = ['dog', 'cat', 'hamster', 'redfish']

for (let i = 0; i < pets.length; i++) {
  const element = pets[i];
  console.log( element);
}
console.log("\n");
/* ESERCIZIO 2
Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2");

const petsSortati = pets.sort();
console.log("ordinati: ",petsSortati);
console.log("\n");
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO 3");
const petsInver = pets.reverse();

for (let i = 0; i < petsInver.length; i++) {
  const element = petsInver[i];
  console.log( element);
}

console.log("\n");
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 4");
const el1 = pets.shift();
pets.push(el1);
console.log("pets: ", pets)
console.log("\n");
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("ESERCIZIO 5");
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach(car => {
  car.targa = "L3G9P1"
})

console.log(" cars targate :", cars)

console.log("\n");
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6");
let aggOgg = {
brand: 'alfa',
model: 'giulia',
color: 'black',
trims: ['life', 'style', 'r-line'],
targa: "L3G9P1"
}
const cars1 = [...cars];
cars1.push(aggOgg)
console.log("cars1 agg:", cars1)

const cars2 = [...cars];
cars2.forEach(car2 => {
 car2.trims.pop();
});
console.log(" cars2 -1tr:", cars2)
console.log("\n");
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ESERCIZIO 7");
const justTrims = []

cars.forEach(e => {
    justTrims.push(e.trims[0]);
  
});

console.log(" justTrims:", justTrims)


console.log("\n");
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
    

*/
console.log("ESERCIZIO 8");

cars.forEach(co => {
  if (co.color.charAt(0).toLocaleLowerCase() === "b" ) {
    console.log("Fizz");
  }
  else {
    console.log("Buzz");
  }

}) 
console.log("\n");
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ESERCIZIO 9");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]
const nstop = []
let x = 0;

while (x < numericArray.length && numericArray[x] !== 32) { 
  console.log(" fino a 32 ", numericArray[x]);                
  nstop.push(numericArray[x]);
  x++;
}

console.log(" nstop:", nstop) // mio test
console.log("\n");
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
console.log("ESERCIZIO 10");
const charactersArray = ['g', 'n', 'u', 'z', 'd']
  const posizione = [];

  for (let x = 0; x < charactersArray.length; x++) {
     switch (charactersArray[x]) {
      case "a":
          posizione.push(1); 
                                                        
        break;                                             

        case "b":
          posizione.push(2);
        
        break;

        case "c":
          posizione.push(3);
        
        break;

        case "d":
          posizione.push(4);
        
        break;

        case "e":
          posizione.push(5);
        
        break;

        case "f":
          posizione.push(6);
        
        break;

        case "g":
          posizione.push(7);
        
        break;

        case "h":
          posizione.push(8);
        
        break;

        case "i":
          posizione.push(9);
        
        break;

        case "j":
          posizione.push(10);
        
        break;

        case "k":
          posizione.push(11);
        
        break;

        case "l":
          posizione.push(12);
        
        break;

        case "m":
          posizione.push(13);
        
        break;

        case "n":
          posizione.push(14);
        
        break;

        case "o":
          posizione.push(15);
        
        break;

        case "p":
          posizione.push(16);
        
        break;

        case "q":
          posizione.push(17);
        
        break;

        case "r":
          posizione.push(18);
        
        break;

        case "s":
          posizione.push(19);
        
        break;

        case "t":
          posizione.push(20);
      
        break;

        case "u":
          posizione.push(21);
        
        break;

        case "v":
          posizione.push(22)

        break;

        case "w":
          posizione.push(23)

        break;
          

        case "x":
          posizione.push(24);
        
        break;

        case "y":
          posizione.push(25);
        
        break;

        case "z":
          posizione.push(26);
        
        break;
        
      default:
        console.log("non sono state trovate lettere!!");

        break;

     } 
    
  }
  
  console.log(posizione);
