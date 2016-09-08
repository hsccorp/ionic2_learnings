import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {NativePageTransitions, TransitionOptions} from 'ionic-native';
import {VideoPlayer} from 'ionic-native'

@Component({
  templateUrl: 'build/pages/video(plugin)/video(plugin).html'
})
export class Page {


 
  


  constructor(public navCtrl: NavController) {
  
  console.log("controller is working of sd card video");
  
  
 VideoPlayer.play("file:///android_asset/www/video/VID-20151202-WA0000.mp4").then(() => {
 console.log('video completed');
}).catch(err => {
 console.log(err);
});
 
   let options: TransitionOptions = {
   direction: 'left',
   duration: 500,
   slowdownfactor: 5
  
 };

NativePageTransitions.slide(options);
  }
 
}