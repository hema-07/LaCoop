import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-success',
  templateUrl: 'success.html'
})

export class SuccessPage {
  constructor(public navCtrl: NavController){

  }
//   searchQuery: string = '';
//  items: string[];
//
//  constructor() {
//    this.initializeItems();
// // goback() {
// //        this.navCtrl.push(HomePage);
// // } initializeItems() {
//     this.items = [
//       'procurement',
//       'finance',
//       'Inventory'
//     ];
//   }

  // getItems(ev: any) {
  //   // Reset items back to all of the items
  //   this.initializeItems();
  //
  //   // set val to the value of the searchbar
  //   let val = ev.target.value;
  //
  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
}
