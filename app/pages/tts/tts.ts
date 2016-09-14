import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite } from 'ionic-native';
import {TextToSpeech} from 'ionic-native';


@Component({
  templateUrl: 'build/pages/tts/tts.html'
})
export class TexttoSpeech {
public value:any;

  

  constructor(public navCtrl: NavController) {
  
  }
  speak()
  {
  TextToSpeech.speak(this.value)
  .then(() => console.log('Successful'))
  .catch((reason: any) => console.log(reason));
  }
  
  
  
}
