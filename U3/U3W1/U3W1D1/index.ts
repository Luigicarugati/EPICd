
// tsc --init {quando inizio il lavoro }
// imposto outfile {"./cartella.nomefile",} e {commento modules} [creo la cartella e il file in cui verra generato il js ] [commento modules perche se no da errore ]
// tsc -w {il terminale entra in watch mode} [guarda cio che succede e lo riproducewrà automaticamente nel file js] 
// comandi da ricordarti node ./js/index,js



interface Smartphone {
    credito: number;
    
    numeroChiamate: number;
}
 
class User implements Smartphone {
    nome: string;
    cognome: string;
    credito: number;
    numeroChiamate: number;

    constructor(nome: string, cognome: string, creditoIniziale: number = 0) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = creditoIniziale;
        this.numeroChiamate = 0;
    }

    ricarica(importo: number): void {
        this.credito += importo;
        console.log(`${this.nome} ${this.cognome} ha ricaricato di ${importo} euro. Credito attuale: ${this.credito} euro.`);
    }

    chiamata(minuti: number): void {
        const costoChiamata = minuti * 0.20;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
            console.log(`${this.nome} ${this.cognome} ha effettuato una chiamata di ${minuti} minuti. Costo: ${costoChiamata} euro. Credito residuo: ${this.credito} euro.`);
        } else {
            console.log(`Credito insufficiente per effettuare la chiamata di ${minuti} minuti.`);
        }
    }

    chiama404(): number {
        return this.credito;
    }

    getNumeroChiamata(): number {
        return this.numeroChiamate;
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        console.log(`Il contatore delle chiamate di ${this.nome} ${this.cognome} è stato azzerato.`);
    }
}

// Esempio di utilizzo
console.log( "M");

const userM= new User("Mario", "Rossi", 10);
userM.ricarica(5); // Aggiunge 5 euro di credito
userM.chiamata(15); // Effettua una chiamata di 15 minuti (costo totale 3 euro)
console.log(`Credito residuo: ${userM.chiama404()} euro`); // Restituisce il credito residuo
console.log(`Numero di minuti di chiamata: ${userM.getNumeroChiamata()}`); // Restituisce i minuti passati in chiamata
userM.azzeraChiamate(); // Azzera la variabile delle chiamate
console.log(`Numero di minuti di chiamata dopo azzeramento: ${userM.getNumeroChiamata()}`); // Verifica l'azzeramento

console.log("L");


const userL = new User("Luca", "Bianchi", 20);
userL.ricarica(10);
userL.chiamata(20)
userL.chiamata(10);
userL.chiamata(120)
console.log(`Credito residuo: ${userL.chiama404()} euro`); // Restituisce il credito residuo
console.log(`Numero di minuti di chiamata: ${userL.getNumeroChiamata()}`); 
console.log(`Numero di minuti di chiamata dopo azzeramento: ${userL.getNumeroChiamata()}`); 


console.log("D");
const userD = new User("Dario", "Verdi", 15);
userD.ricarica(10); // Aggiunge 10 euro di credito
userD.chiamata(5); // Effettua una chiamata di 5 minuti (costo totale 1 euro)
console.log(`Credito residuo: ${userD.chiama404()} euro`); // Restituisce il credito residuo
console.log(`Numero di minuti di chiamata: ${userD.getNumeroChiamata()}`); // Restituisce i minuti passati in chiamata



