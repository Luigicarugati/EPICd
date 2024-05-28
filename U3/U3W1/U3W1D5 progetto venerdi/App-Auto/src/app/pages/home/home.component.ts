import { Component } from '@angular/core';
import { AutofetchService } from '../../services/autofetch.service';
import { iAuto } from '../../modules/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  Autoarrlogo:string[] =[];
  AutoarrRandom:iAuto[] =[];

  constructor(
    private autosSvc:AutofetchService
  ){}

  ngOnInit() {
    this.autosSvc.getAuto().then(() => {
      this.Autoarrlogo = this.autosSvc.getBrandlogo();
      this.AutoarrRandom = this.autosSvc.getRandomAuto();

      return this.Autoarrlogo, this.AutoarrRandom;


    })
  }
}


