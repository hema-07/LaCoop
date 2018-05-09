import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinanceInvoice } from '../finance-invoice/finance-invoice';

@Component({
  selector: 'page-match-receipts',
  templateUrl: 'match-receipts.html'
})
export class MatchReceipts {

  constructor(public navCtrl: NavController) {

  }
backInvoice(event){
  this.navCtrl.push(FinanceInvoice);
}

}
