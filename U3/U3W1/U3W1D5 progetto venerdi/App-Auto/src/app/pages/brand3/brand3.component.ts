import { Component } from '@angular/core';
import { iAuto } from '../../modules/auto';
import { AutofetchService } from '../../services/autofetch.service';

@Component({
  selector: 'app-brand3',
  templateUrl: './brand3.component.html',
  styleUrl: './brand3.component.scss'
})
export class Brand3Component {
  FordArr:iAuto[] =[];
  constructor(
    private autosSvc:AutofetchService
  ){}
  ngOnInit() {
    this.autosSvc.getAuto().then(() => {
      this.FordArr = this.autosSvc.getFordAuto();
      console.log(this.FordArr);
    })
  }

}
