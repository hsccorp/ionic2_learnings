import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/actionsheet/actionsheet.html'
})
export class ActionSheet {
  constructor(private navCtrl: NavController,private actionSheetController : ActionSheetController ) {
  }
   showActionSheet() {
    let actionSheet = this.actionSheetController.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
