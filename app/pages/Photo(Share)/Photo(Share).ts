import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoViewer } from 'ionic-native';
import {NativePageTransitions, TransitionOptions} from 'ionic-native';

/*
  Generated class for the Page6Page page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/Photo(Share)/Photo(Share).html',
})
export class Page6Page {

  constructor(private navCtrl: NavController) {
PhotoViewer.show("https://upload.wikimedia.org/wikipedia/commons/1/1e/Stonehenge.jpg", 'Share the image', {share: true});

let options: TransitionOptions = {
   direction: 'down',
   duration: 500,
   slowdownfactor: 5
  
 };

NativePageTransitions.slide(options);
  }

}
