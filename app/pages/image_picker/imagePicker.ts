import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NativePageTransitions, TransitionOptions} from 'ionic-native';
import { ImagePicker } from 'ionic-native';


@Component({
  templateUrl: 'build/pages/image_picker/imagePicker.html'
})
export class imagePicker {
public image:any;

  constructor(public navCtrl: NavController) {
	  
	  
  
 
let options1: TransitionOptions = {
   direction: 'left',
   duration: 500,
   slowdownfactor: 5
  
 };
 
 

NativePageTransitions.slide(options1);


  
 
  }
  pickImage()
  {
	  ImagePicker.getPictures([]).then((results) => {
      for (var i = 0; i < results.length; i++) {
      console.log('Image URI: ' + results[i]);
      this.image=results;
  }
}, (err) => { });
  }
  



}
