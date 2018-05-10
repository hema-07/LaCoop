import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShipmentAdvice } from '../order-shipmentadvice/shipment-advice';
import { AlertController } from 'ionic-angular';
import { InitiateJob1 } from '../order-initiatejob1/initiate-job1';
@Component({
  selector: 'page-Procurement2',
  templateUrl: 'Procurement2.html'
})

export class Procurement2 {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController){

  }

goBack6()
{
  this.navCtrl.push(InitiateJob1);
}
make(){
  
}
 createShipment() {
    let confirm = this.alertCtrl.create({
      title: 'PO has been created. Proceed to shipment',
      buttons: [
        {
          text: 'No',
          // handler: () => {
          //   this.navCtrl.push(OrdersManagementDetails);
          // }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.push(ShipmentAdvice);
          }
        }
      ]
    });
    confirm.present();
  }
}
