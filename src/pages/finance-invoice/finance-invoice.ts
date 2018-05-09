import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PastJournals } from '../finance-pastjournals/past-journals';
@Component({
  selector: 'page-invoice',
  templateUrl: 'finance-invoice.html'
})
export class FinanceInvoice {

  constructor(public navCtrl: NavController) {

  }

orderDetails(event){
    console.log("clicked");
  this.navCtrl.push(PastJournals);
  }
}
