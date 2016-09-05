import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyComponent} from '../../components/my-component/my-component';

@Component({
  templateUrl: 'build/pages/list_500/list_500.html',
  directives: [MyComponent]
})
export class List500 {
public chats:any;
  constructor(public navCtrl: NavController) {

  
  this.chats = [];
    
for(var i=1;i<500;i++)
    {
       this.chats.push({id:i,name:'Header text '+i,lastText:'Description Text '+i})   
    }
  }
}
