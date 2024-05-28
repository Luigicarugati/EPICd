/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/console.log("ESERCIZIO A");

let sum = 10 + 20;
console.log(sum);

console.log("\n");
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/console.log("ESERCIZO B");

let random = Math.floor(Math.random() * 21);
console.log(random);

console.log("\n");
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/console.log("ESERCIZIO C");

let me = {
  name: 'Luigi', 
  surname: 'Carugati', 
  age: '22'
}

console.log("\n");
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/console.log("ESERCIZIO D");

delete me.age
console.log(me);

console.log("\n");
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/console.log("ESERCIZIO E");

me.skills = ['JavaScript'];
console.log(me);

console.log("\n");
  
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/console.log("ESERCIZIO F");

me.skills.push('java')
console.log(me);


console.log("\n");
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/console.log("ESERCIZIO G");

me.skills.pop()
console.log(me);

console.log("\n");
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/console.log("ESERCIZIO 1");

const dice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const result = dice();
console.log(result); 


console.log("\n");
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/console.log("ESERCIZIO 2");

const whoIsBigger = (num1, num2) => {
  return num1 > num2 ? num1 : num2;
};

const tot = whoIsBigger(10, 20);
console.log(tot); // Stampa 10

console.log("\n");
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/console.log("ESERCIZIO 3");

const splitMe = (string) => {
  return string.split(" ");
};

const testoSpl = splitMe("ma quanto e' bello andare in giro con le ali sotto ai piedi");
console.log(testoSpl); 

console.log("\n");
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/console.log("ESERCIZIO 4");

const deleteOne = (string, isFirst) => {
  if (isFirst) {
    return string.slice(1);
  } else {
    return string.slice(0, -1);
  }
};

console.log(deleteOne("Pippo", true)); 
console.log(deleteOne("Pippo", false)); 

console.log("\n");
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/console.log("ESERCIZIO 5");

const onlyLetters = (stringa) => {
  let result = "";
  for (let i = 0; i < stringa.length; i++) {
    if (isNaN(parseInt(stringa[i]))) {
      result += stringa[i];
    }
  }
  return result;
};


console.log(onlyLetters("io ho 56 belle macchine")); 

console.log("\n");
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/console.log("ESERCIZIO 6");

const isThisAnEmail = (string) => {
  return string.includes('@') && string.lastIndexOf('.') > string.indexOf('@');
};

console.log(isThisAnEmail("esempio@esempio.com")); // true 
console.log(isThisAnEmail("nonvalido_email")); // false 


console.log("\n");
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/console.log("ESERCIZIO 7");

const whatDayIsIt = () => {
  const giorniSetiimana = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
  const oggi = new Date().getDay();
  return giorniSetiimana[oggi];
};


console.log(whatDayIsIt()); 

console.log("\n");
/* ESERCIZIO 8
  Scrivi una funzione chiamata "lanciaDadi" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  lanciaDadi(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/console.log("ESERCIZIO 8");


const lanciaDadi = (numero) => {
  let result = {
      sum: 0,
      values: []
  };

  const dice = () => Math.floor(Math.random() * 6) + 1;

  for (let i = 0; i < numero; i++) {
      let valore = dice();
      result.sum += valore;
      result.values.push(valore);
  }

  return result;
};

console.log(lanciaDadi(3)); 

console.log("\n");
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/console.log("ESERCIZIO 9");
const howManyDays = (data) => Math.round((new Date() - new Date(data)) / (1000 * 60 * 60 * 24));


console.log(howManyDays('2022-04-03')); 

console.log("\n");
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/console.log("ESERCIZIO 10");

const isTodayMyBirthday = () => {
  const today = new Date();
  const giornoDiOggi = today.getDate();
  const meseDiOggi = today.getMonth() + 1;
  
  const giornoCompleanno = 25;
  const meseCompleanno = 3;
  
  return giornoDiOggi === giornoCompleanno && meseDiOggi === meseCompleanno;
};

console.log(isTodayMyBirthday());

console.log("\n");
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
  */console.log("ESERCIZIO 11");
  
  const deleteProp = (oggetto, stringa) => {
    delete oggetto[stringa];
    return oggetto;
  };
  
  // Esempio 11
  const oggettoTest = {
    nome: "Luigi",
    eta: 22,
    lavoro: "Studente"
  };
  
  console.log(deleteProp(oggettoTest, "lavoro")); 
  
  console.log("\n");
  /* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.*/

  const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
  
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ]
  console.log("ESERCIZIO 12");

  const newestMovie = (movies) => {
    if (movies.length === 0) {
        return null; // array vuoto, restituisci null
    }
    
    // Trova il film con l'anno massimo
    const newest = movies.reduce((prev, current) => {
        return (parseInt(prev.Year) > parseInt(current.Year)) ? prev : current;
    });
    
    return newest;
};

console.log(newestMovie(movies));

console.log("\n");
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/console.log("ESERCIZIO 13");

const countMovies = (movies) => {
  return movies.length;
};
console.log(countMovies(movies)); 

console.log("\n");
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/console.log("ESERCIZIO 14");

const onlyTheYears = (movies) => {
  return movies.map(movie => movie.Year);
};
console.log(onlyTheYears(movies));

console.log("\n");
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/console.log("ESERCIZIO 15");
const onlyInLastMillennium = (movies) => {
  return movies.filter(movie => {
      const year = parseInt(movie.Year);
      return year >= 1000 && year <= 1999;
  });
};
console.log(onlyInLastMillennium(movies)); 

console.log("\n");
/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/console.log("ESERCIZIO 16");
const sumAllTheYears = (movies) => {
  return movies.reduce((total, movie) => total + parseInt(movie.Year), 0);
}
console.log(sumAllTheYears(movies)); 

console.log("\n");
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/console.log("ESERCIZIO 17");

const searchByTitle = (movies, searchString) => {
  return movies.filter(movie => movie.Title.toLowerCase().includes(searchString.toLowerCase()));
};
console.log(searchByTitle(movies, 'Avengers'));

console.log("\n");
/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/console.log("ESERCIZIO 18");
const searchAndDivide = (movies, searchString) => {
  const match = movies.filter(movie => movie.Title.toLowerCase().includes(searchString.toLowerCase()));
  const unmatch = movies.filter(movie => !movie.Title.toLowerCase().includes(searchString.toLowerCase()));
  return { match, unmatch };
}
console.log(searchAndDivide(movies,'Avengers' ))

console.log("\n");
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/console.log("ESERCIZIO 19");

const removeIndex = (movies, index) => {
  if (index < 0 || index >= movies.length) {
      console.error('Indice non valido.');
      return movies; 
  }
  
  return movies.filter((_, i) => i !== index);
};
console.log(removeIndex(movies, 1))

console.log("\n");
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/console.log("ESERCIZIO 20");

const selezionaContainer = () => {
   document.getElementById("container");
};


const containerElement = selezionaContainer();


console.log("\n");
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/console.log("ESERCIZIO 21");

const selezionaTuttiITd = () => {
   document.querySelectorAll("td");
};

const tdElements = selezionaTuttiITd();

console.log("\n");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/console.log("ESERCIZIO 22");

const stampaTesto = () => {
  const tdElements = document.querySelectorAll("td");
  tdElements.forEach(td => {
    console.log(td.testo);
  });
};
stampaTesto();

console.log("\n");
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/console.log("ESERCIZIO 23");

const aggiunngiRossoBckA = () => {
  const linkElements = document.querySelectorAll("a");
  linkElements.forEach(link => {
      link.style.backgroundColor = "red";
  });
};

aggiunngiRossoBckA();

console.log("\n");
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/console.log("ESERCIZIO 24");

const aggiungiLi = () => {
  const nuovoLi = document.createElement("li");
  nuovoLi.textContent = "Nuovo elemento";
  const myList = document.getElementById("myList");
  myList.appendChild(nuovoLi); 
};

//aggiungiLi(); per evitare errori in console

console.log("\n");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/console.log("ESERCIZIO 25");

const svuotaLista = () => {
  const myList = document.getElementById("myList");
  while (myList.firstChild) {
      myList.removeChild(myList.firstChild);
  }
};

//svuotaLista(); per evitare errori in console

console.log("\n");
/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/console.log("ESERCIZIO 26");

const aggClasseCss = () => {
  const trElements = document.querySelectorAll("tr");
  trElements.forEach(tr => {
      tr.classList.add("test");
  });
};

aggClasseCss();

console.log("\n");
// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***
  
  */ console.log("ESERCIZIO 27");

  const halfTree = height => {
    for (let i = 1; i <= height; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += "*";
        }
        console.log(row);
    }
};

halfTree(3);

  
console.log("\n");
/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/console.log("ESERCIZIO 28");

const tree = height => {
  for (let i = 0; i < height; i++) {
      let row = "";

      for (let j = 0; j < height - i - 1; j++) {
          row += " ";
      }

      for (let k = 0; k < 2 * i + 1; k++) {
          row += "*";
      }

      console.log(row);
  }
};

tree(3);



console.log("\n");
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/console.log("ESERCIZIO 29");

const isItPrime = num => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

console.log(isItPrime(5));
console.log(isItPrime(10));

console.log("\n");
/* Questo array viene usato per gli esercizi. Non modificarlo. */

