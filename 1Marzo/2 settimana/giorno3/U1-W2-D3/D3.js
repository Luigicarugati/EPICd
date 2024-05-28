const starWarsCharacters = [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 200,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: 167,
    mass: 75,
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a',
  },
  {
    name: 'R2-D2',
    height: 96,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a',
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 25,
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 50,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female',
  },
  {
    name: 'Owen Lars',
    height: 178,
    mass: 50,
    hair_color: 'brown, grey',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '52BBY',
    gender: 'male',
  },
  {
    name: 'Beru Whitesun lars',
    height: 165,
    mass: 75,
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'blue',
    birth_year: '47BBY',
    gender: 'female',
  },
  {
    name: 'R5-D4',
    height: 97,
    mass: 32,
    hair_color: 'n/a',
    skin_color: 'white, red',
    eye_color: 'red',
    birth_year: 'unknown',
    gender: 'n/a',
  },
  {
    name: 'Biggs Darklighter',
    height: 183,
    mass: 84,
    hair_color: 'black',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '24BBY',
    gender: 'male',
  },
  {
    name: 'Obi-Wan Kenobi',
    height: 182,
    mass: 77,
    hair_color: 'auburn, white',
    skin_color: 'fair',
    eye_color: 'blue-gray',
    birth_year: '57BBY',
    gender: 'male',
  },
]

/* ESERCIZIO 1
  Crea una variabile chiamata "charactersNames" e assegnale un array vuoto
*/
var charactersNames = [];        // charactersNames vuoto, che verrà utilizzato successivamente per memorizzare i nomi dei personaggi.

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "charactersNames" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for (var i = 0; i < starWarsCharacters.length; i++) {

  charactersNames.push(starWarsCharacters[i].name);
  
}
  if (i=== starWarsCharacters.length){
  console.log(charactersNames); 
}


/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/

var femaleCharacters = [];                        //femaleCharacters vuoto, che verrà utilizzato per memorizzare i personaggi di sesso femminile.
                                            
for(var i = 0; i <starWarsCharacters.length; i++) {    // ciclo for attraverso l'array starWarsCharacters

  if (starWarsCharacters[i].gender==="female" ) {      //  Durante ogni iterazione, se il personaggio ha il genere "female", viene aggiunto all'array femaleCharacters.
    femaleCharacters.push(starWarsCharacters[i]);
  }
}
  
console.log(femaleCharacters);                        //stampato l'array femaleCharacters, che conterrà tutti i personaggi di sesso femminile.

/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
var eyeColor = {                  // oggetto eyeColor che ha cinque chiavi corrispondenti ai colori degli occhi. 
                                  // Ogni chiave è associata a un array vuoto che poi sara popolato con i personaggi che hanno il colore degli occhi corrispondente.
  blue:[],
  yellow:[],
  brown:[],
  red:[],
"blue-gray": []

};

console.log(eyeColor);           // stampato l'oggetto eyeColor, che mostra le chiavi per i colori degli occhi e gli array corrispondenti.

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
for (var i = 0; i <starWarsCharacters.length; i++){   //secondo ciclo for attraverso l'array starWarsCharacters. Durante ogni iterazione, il colore degli occhi  
  var charactereyeColor = starWarsCharacters[i].eye_color; //  del personaggio viene controllato tramite uno switch-case. a seconda del colore,
                                                          //  il personaggio viene aggiunto all'array corrispondente all'interno dell'oggetto eyeColor.
    switch (charactereyeColor) { 

      case "blue":
        eyeColor.blue.push(starWarsCharacters[i]);
        break;

      case "yellow":
        eyeColor.yellow.push(starWarsCharacters[i]);
        break;
      
      case "brown":
          eyeColor.brown.push(starWarsCharacters[i]);
        break;
      
      case "red":
        eyeColor.red.push(starWarsCharacters[i]);
        break;
      
      case "blue-gray":
        eyeColor["blue-gray"].push(starWarsCharacters[i]);
        break

        default:
          break;     
      }

}
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
var crewMass = 0 ;
var pippo = 0;

while (pippo < starWarsCharacters.length) {                        //calcolo  la massa totale dei personaggi. Viene inizializzata una variabile crewMass a 0 e 
  var charactermass = parseInt(starWarsCharacters[pippo].mass);    //viene eseguito un ciclo while per sommare la massa di ciascun personaggio all'interno dell'array starWarsCharacters. 
  if (!isNaN(charactermass)) {                                     //dell'array starWarsCharacters. Se il personaggio ha un valore numerico di massa, viene aggiunto alla crewMass.
    crewMass += charactermass;
  }
  pippo++;
}

console.log("massa totale ", crewMass);


/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".


  
  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 e inferiore a 700 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 e inferiore a 900 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 e inferiore a 1000 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/


if (crewMass < 500) {
  console.log("ship is under load");         //In base alla crewMass, emesse diverse dichiarazioni di avviso riguardo al carico della nave.

}   else if (crewMass>= 500 && crewMass <700) {

    console.log("ship is half loaded");
  }

  else if (crewMass >= 700 && crewMass <900 ) {
    console.log("waring: load is over 700");
  }

  else if(crewMass >= 900 && crewMass <1000) {
    console.log("Danger OVERLOAD ALERT 900");

  }

  else { 
    console.log("DANGER!! OVERLOAD ALERT : escape form ship now")
  }




/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/


var modifiedCharacters = [];                          //  array modifiedCharacters vuoto.


for (var i = 0; i < starWarsCharacters.length; i++) {       // altro ciclo for attraverso l'array starWarsCharacters.
                                                            //  Durante ogni iterazione, se il genere del personaggio è "n/a"
  if (starWarsCharacters[i].gender === "n/a") {             // viene creato un nuovo oggetto modificato con il genere impostato su "robot".
                                                            //  Questo nuovo oggetto viene poi aggiunto all'array modifiedCharacters.
    var modifiedCharacter = {
      ...starWarsCharacters[i], 
      gender: "robot" 
    };
    
    
    modifiedCharacters.push(modifiedCharacter);
  }
}


console.log(modifiedCharacters);                           //stamp l'array modifiedCharacters, con i personaggi il cui genere è stato modificato in "robot".



/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "charactersNames" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "charactersNames" prima e dopo l'operazione.
*/

/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
