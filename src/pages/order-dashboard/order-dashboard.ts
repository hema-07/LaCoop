import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OrdersManagement } from '../orders-management/orders-management';
import { Dashboard } from '../dashboard/dashboard';
import { Procurement } from '../order-procurement/procurement';
@Component({
  selector: 'page-order',
  templateUrl: 'order-dashboard.html'
})
export class OrderDashboard {

  constructor(public navCtrl: NavController) {

  }

  ordersmanagement() {
     this.navCtrl.push(OrdersManagement);
   }
   gobackdashboard(){
     this.navCtrl.push(Dashboard);
   }
   procurement(){
     this.navCtrl.push(Procurement);
   }
}
