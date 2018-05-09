import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShipmentAdvice } from '../order-shipmentadvice/shipment-advice';
@Component({
  selector: 'page-Procurement',
  templateUrl: 'Procurement.html'
})

export class Procurement {
  constructor(public navCtrl: NavController){

  }
createShipment(){
  this.navCtrl.push(ShipmentAdvice);
}
// goBack5()
// {
//   this.navCtrl.push(OrderDashboard);
// }
}
