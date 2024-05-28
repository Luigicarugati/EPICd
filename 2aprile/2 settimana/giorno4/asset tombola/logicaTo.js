// array vuoto 
let numeriGenerati = [];



// Funzione per generare un numero casuale tra 1 e 76
const GeneraNCaso = () => {
  let numeroCaso;
  do {
    numeroCaso = Math.floor(Math.random() * 76) + 1;
  } while (numeriGenerati.includes(numeroCaso)); // Controlla se il numero è già stato estratto
  return numeroCaso;
}

// Funzione per creare il tabellone della tombola
const creaTabellone = () => {
  const tabellonePr = document.getElementById('tabellonePr');
  tabellonePr.innerHTML = '';
  for (let i = 1; i <= 99; i++) {
    const div = document.createElement('div');
    div.textContent = i;
    div.className = 'celleNumeri ';
    if (numeriGenerati.includes(i)) {
      div.classList.add('usciti');
    }
    tabellonePr.appendChild(div);
  }
}

// funzione per creare le schede
const creaScheda = () => {
  const numTables = prompt("Inserisci il numero di schede da creare:");
  
  // Controllo se l'utente ha inserito un numero valido
  if (isNaN(numTables) || numTables <= 0) {
    alert("Inserisci un numero valido!");
    return;
  }
  
  // Convertire il numero di tabelle in un intero
  const num = parseInt(numTables);

  // Creare le tabelle
  for (let i = 0; i < num; i++) {
    const tabella = document.createElement("tabella");
    
    // Assegna la classe "scheda" a ciascuna tabella creata
    tabella.classList.add("scheda");
    
    // Creare 3 righe
    for (let j = 0; j < 3; j++) {
      const row = document.createElement("tr");
      
      // Creare 9 colonne
      for (let k = 0; k < 9; k++) {
        const cell = document.createElement("td");
        const text = document.createTextNode(`Riga ${j + 1}, Colonna ${k + 1}`);
        cell.appendChild(text);
        row.appendChild(cell);
      }
      
      tabella.appendChild(row);
    }
    
    document.body.appendChild(tabella);
  }
};

creaScheda();

// Funzione per estrarre un numero casuale e visualizzarlo
const estrazioneCasu = () => {
  const nummeriEstratti = GeneraNCaso();
  numeriGenerati.push(nummeriEstratti);
  // Aggiorna il tabellone con il numero estratto
  creaTabellone();
}
  
// Attivazione del gioco al click del pulsante
document.getElementById('estraiBtn').addEventListener('click', () => {
  if (numeriGenerati.length < 76) {
    estrazioneCasu();
  }
});

