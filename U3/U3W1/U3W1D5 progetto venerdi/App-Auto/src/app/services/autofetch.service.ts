import { iJsoncontent } from '../modules/ijsoncontent';
import { iAuto } from './../modules/auto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutofetchService {
  apiAuto:string ='../../assets/db/db.json';
  AutoArr:iAuto[] = [];

  constructor() {
    this.getAuto();
  }
  async getAuto():Promise<void>{
   try {
    let response = await fetch(this.apiAuto);
    let alltheCar = <iJsoncontent> await response.json();
    console.log(alltheCar);
    this.AutoArr = alltheCar
    console.log(this.AutoArr);
   } catch (error) {
    console.log("Errore di caricamento delle auto",error);
    }
  }
  getAll(){
    return this.AutoArr;
  }
  getBrandlogo(){
    let ArrFiltredLogo = [...new Set(this.AutoArr.map(auto => auto.brandLogo))];
    return  ArrFiltredLogo
  }
  getRandomAuto(): iAuto[] {
  const shuffled = [...this.AutoArr].sort(() => 0.5 - Math.random()); //clono array e lo mescolo
  return shuffled.slice(0, 2); //seleziono i primi 2 e li ritorno
}
  getAudiAuto(){
    return this.AutoArr.filter(auto => auto.brand === 'Audi');
  }
  getFiatAuto(){
    return this.AutoArr.filter(auto => auto.brand === 'Fiat');
  }
  getFordAuto(){
    return this.AutoArr.filter(auto => auto.brand === 'Ford');
  }
}

