import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Procurement } from '../order-procurement/procurement';
@Component({
  selector: 'page-initiate-detail',
  templateUrl: 'order-init-detail.html'
})
export class JobDetails {

  constructor(public navCtrl: NavController) {

  }
gobackProcurement(){
  this.navCtrl.push(Procurement);
}
}