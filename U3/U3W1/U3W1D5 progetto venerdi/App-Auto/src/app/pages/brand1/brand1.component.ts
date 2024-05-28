import { Component } from '@angular/core';
import { AutofetchService } from '../../services/autofetch.service';
import { iAuto } from '../../modules/auto';

@Component({
  selector: 'app-brand1',
  templateUrl: './brand1.component.html',
  styleUrl: './brand1.component.scss'
})
export class Brand1Component {
  AudiArr:iAuto[] =[];
  constructor(
    private autosSvc:AutofetchService
  ){}
  ngOnInit() {
    this.autosSvc.getAuto().then(() => {
      this.AudiArr = this.autosSvc.getAudiAuto();
      console.log(this.AudiArr);
    })
  }
}
