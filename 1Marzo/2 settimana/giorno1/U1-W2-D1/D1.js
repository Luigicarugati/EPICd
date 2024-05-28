   /*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Stringhe: sostanzialmente possono essere parole, frasi o  una sequenza di caratteri 
    Numeri : Possono essere numeri interi come 5 o -10 o numeri decimali come 3.14 sono utilizzati per fare calcoli matematici o per rappresentare quantità
    Booleani : I booleani sono come piccoli segnali che possono essere solo due: "vero" o "falso"
    Null:significa che è vuoto o non ha un valore assegnato.
    Undefined:quando una variabile è undefined, significa che non è stata assegnata a nulla o non è stata definita.


    */
    

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */   

var nome = "Luigi"
console.log(nome)
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */ 
 
var numnero1 = 12;
var nunmero2 = 20;
var somma = numnero1 + nunmero2; 
console.log(somma)





/* ESERCIZIO 4
Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var x = 12

/* ESERCIZIO 5
Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
var nome ="luigi"
nome ="carugati"
console.log(nome)


/*const nomeconst = "luigi"
      nomeconst= "carugati"
console.log{nomeconst}
*/
/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


var sottrazione =  x- 4;
console.log(sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

var n1 ="john";
var n2 ="John";
console.log(n1 == n2);

var n1Minuscolo= n1.toLowerCase ();
var n2Minuscolo= n2.toLowerCase ();

console.log(
  'n1Minuscolo e n2Minuscolo in lowercase sono uguali:',
  n1Minuscolo == n2Minuscolo
)




// o o o o o o o o o o o o o o o o o o o


let name1 = "john", name2 = "John";

name1 === name2 ? console.log("Sono uguali") : console.log("Sono DIVERSI!"); 

name1.toLowerCase() === name2.toLowerCase() ? console.log("sono uguali 2") : console.log("son diversi 2");

