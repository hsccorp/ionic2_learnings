import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyComponent} from '../../components/my-component/my-component';

@Component({
  templateUrl: 'build/pages/videos/videos.html',
  directives: [MyComponent]
})
export class Videos {
public chats:any;
  constructor(public navCtrl: NavController) {

  
  }
}
