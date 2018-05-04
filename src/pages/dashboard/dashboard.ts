import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuccessPage } from '../success/success';
@Component({
  selector: 'Dashboard',
  templateUrl: 'dashboard.html'
})

export class Dashboard {
  constructor(public navCtrl: NavController){

  }
orderDetails() {
       this.navCtrl.push(SuccessPage);
}
}
