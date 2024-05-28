import { Component } from '@angular/core';
import { iAuto } from '../../modules/auto';
import { AutofetchService } from '../../services/autofetch.service';

@Component({
  selector: 'app-brand2',
  templateUrl: './brand2.component.html',
  styleUrl: './brand2.component.scss'
})
export class Brand2Component {
  FiatArr:iAuto[] =[];
  constructor(
    private autosSvc:AutofetchService
  ){}
  ngOnInit() {
    this.autosSvc.getAuto().then(() => {
      this.FiatArr = this.autosSvc.getFiatAuto();
      console.log(this.FiatArr);
    })
  }
}
