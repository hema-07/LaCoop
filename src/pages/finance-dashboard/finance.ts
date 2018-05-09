import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { OrdersManagement } from '../orders-management/orders-management';
import { FinanceInvoice } from '../finance-invoice/finance-invoice';

@Component({
  selector: 'page-finance',
  templateUrl: 'finance.html'
})
export class FinanceDashboard {

  constructor(public navCtrl: NavController) {

  }

   financeInvoice() {
     this.navCtrl.push(FinanceInvoice);
   }
}
