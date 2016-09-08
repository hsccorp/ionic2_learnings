import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Shake} from 'ionic-native';
import { AlertController } from 'ionic-angular';
import {NativePageTransitions, TransitionOptions} from 'ionic-native';


@Component({
  templateUrl: 'build/pages/Shake(Control)/Shake(Control).html'
})
export class Page4 {

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
  
  console.log("shake controller has been loaded");
  let watch = Shake.startWatch(40).subscribe(() => {
  console.log("shaking");
  this.showAlert();
  });
let options: TransitionOptions = {
   direction: 'up',
   duration: 500,
   slowdownfactor: 5
  
 };

NativePageTransitions.slide(options);
  
 
  }
  
showAlert()
{
console.log("Alert function is working");
let alert = this.alertCtrl.create({
      title: 'Dont Shake the Phone',
      
      buttons: ['OK']
    });
    alert.present();
}

}
