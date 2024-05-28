/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function NumeroPiuGrande(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
var a = 10;
var b = 20;
var risultato = NumeroPiuGrande(a, b);
console.log("Il numero più grande tra", a, "e", b, "è:", risultato);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

function verificaNumero(numero) {
  if (numero !== 5) {
    console.log("not equal");
  }
}

verificaNumero(5);
verificaNumero(10); 

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function DivisibilitaPerCinque(numero) {
  if (numero % 5 === 0) {
    console.log(numero + " è divisibile per 5");
  }
}


DivisibilitaPerCinque(10);
DivisibilitaPerCinque(7);
DivisibilitaPerCinque(5);  


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function OttoOAddizioneSottrazioneUguale(a, b) {
  if (a === 8 || b === 8) {
    console.log("Uno dei due numeri è 8. ", a, b);
  } else if (a + b === 8) {
    console.log("La somma dei due numeri è uguale a 8. ", a, "+", b);
  }
  else if (a - b === 8) {
    console.log("La sottrazione tra i due numeri dà 8. ", a, "-", b);
  }
  else if (b - a === 8) {
    console.log("La sottrazione tra i due numeri dà 8. ", a, "-", b);
  }
  else if (a + b !== 8 && a - b !== 8 && b - a !== 8) {
    console.log("Nessuna delle condizioni richieste è soddisfatta. ", a, b);
  }
}



OttoOAddizioneSottrazioneUguale(4, 8);
OttoOAddizioneSottrazioneUguale(12, 4);
OttoOAddizioneSottrazioneUguale(10, 2);
OttoOAddizioneSottrazioneUguale(3, 5);
OttoOAddizioneSottrazioneUguale(50, 42)



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function TotaleCheckout(ShoppingCart) {
  if (ShoppingCart > 50) {
    return ShoppingCart;
  } else {
    return ShoppingCart + 10;
  }
}


const ShoppingCart1 = 45;
const ShoppingCart2 = 60;
const ShoppingCart3 = 20;
const ShoppingCart4 = 100;

console.log(" totale da addebitare per il checkout (con totale carrello =", ShoppingCart1 + "):", TotaleCheckout(ShoppingCart1));
console.log(" totale da addebitare per il checkout (con totale carrello =", ShoppingCart2 + "):", TotaleCheckout(ShoppingCart2));
console.log(" totale da addebitare per il checkout (con totale carrello =", ShoppingCart3 + "):", TotaleCheckout(ShoppingCart3));
console.log(" totale da addebitare per il checkout (con totale carrello =", ShoppingCart4 + "):", TotaleCheckout(ShoppingCart4));
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function calcolaTotaleCheckout(totalCarrello, isBlackFriday) {

  let totaleConSconto = totalCarrello;


  if (isBlackFriday) {
    totaleConSconto * 0.8;
  }


  let totaleDaAddebitare = totaleConSconto;


  if (totaleConSconto > 50 || (isBlackFriday && totaleConSconto > 50)) {

    return totaleDaAddebitare;
  } else {

    totaleDaAddebitare += 10;
    return totaleDaAddebitare;
  }
}


const totaleCarrello1 = 45;
const totaleCarrello2 = 60;


console.log("Ammontare totale da addebitare per il checkout (senza promozioni):", calcolaTotaleCheckout(totaleCarrello1, false));
console.log("Ammontare totale da addebitare per il checkout (con promozione Black Friday):", calcolaTotaleCheckout(totaleCarrello1, true));
console.log("Ammontare totale da addebitare per il checkout (senza promozioni):", calcolaTotaleCheckout(totaleCarrello2, false));
console.log("Ammontare totale da addebitare per il checkout (con promozione Black Friday):", calcolaTotaleCheckout(totaleCarrello2, true));


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 10;
let n2 = 53;
let n3 = 100;

if (n1 >= n2 && n1 >= n3) {
  if (n2 >= n3) {
    console.log("Ordine decrescente:", n1,"-", n2,"-", n3);
  } else {
    console.log("Ordine decrescente:", n1,"-", n3,"-", n2);
  }
} else if (n2 >= n1 && n2 >= n3) {
  if (n1 >= n3) {
    console.log("Ordine decrescente:", n2, "-",n1,"-", n3);
  } else {
    console.log("Ordine decrescente:", n2,"-", n3,"-", n1);
  }
} else {
  if (n1 >= n2) {
    console.log("Ordine decrescente:", n3,"-", n1,"-", n2);
  } else {
    console.log("Ordine decrescente:", n3,"-", n2,"-", n1);
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function verificaNumero(valore) {
  if (typeof valore === "number") {
    return true;
  } else {
    return false;
  }
}


let valore1 = 10;
let valore2 = "pippo";

console.log(valore1 + " è un numero? " + verificaNumero(valore1));
console.log(valore2 + " è un numero? " + verificaNumero(valore2));

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function PariDispari(numero) {
  if (numero % 2 === 0) {
    return "Il numero è pari.";
  } else {
    return "Il numero è dispari.";
  }
}

let numero1 = 10;
let numero2 = 7;

console.log(numero1 + " " + PariDispari(numero1));
console.log(numero2 + " " + PariDispari(numero2));

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */



let val1 = 7;
let val2 = 12;
let val3 = 3;


let valori = [val1, val2, val3];


valori.forEach(function (valore) {
  if (valore < 5) {
    console.log(valore + ": Meno di 5");
  } else if (valore < 10) {
    console.log(valore + ": Meno di 10");
  } else {
    console.log(valore + ": uguale o maggiore di 10");
  }
});

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto';

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me1 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'toronto'
};

delete me1.lastName;

console.log(me1);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me2 = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

me2.skills.pop();

console.log(me2.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeri = [];

numeri.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log("numeri", numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numeri00 = [];

numeri00.push(1,2,3,4,5,6,7,8,9,)

numeri00.pop

numeri00.push(100)

console.log("numeri00", numeri00);