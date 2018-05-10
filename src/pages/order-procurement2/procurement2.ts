import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShipmentAdvice } from '../order-shipmentadvice/shipment-advice';
import { AlertController } from 'ionic-angular';
import { InitiateJob1 } from '../order-initiatejob1/initiate-job1';
import { Procurement1 } from '../order-procurement1/procurement1';
import { OrderDashboard } from '../order-dashboard/order-dashboard';
@Component({
  selector: 'page-Procurement2',
  templateUrl: 'Procurement2.html'
})

export class Procurement2 {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController){

  }


 shipConfirm1() {
  
    let confirm = this.alertCtrl.create({
      title: 'Shipment advice has been created and sent to Carrier',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.navCtrl.push(OrderDashboard);
          }
        }
      ]
    });
    confirm.present();

  }
  goBack7()
  {
    this.navCtrl.push(Procurement1);
  }
}
