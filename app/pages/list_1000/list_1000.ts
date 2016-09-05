import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyComponent} from '../../components/my-component/my-component';

@Component({
templateUrl: 'build/pages/list_1000/list_1000.html',
  directives: [MyComponent]
})
export class List1000 {
public chats:any;
  constructor(public navCtrl: NavController) {

  this.chats = [];
    
for(var i=1;i<1000;i++)
    {
       this.chats.push({id:i,name:'Header text '+i,lastText:'Description Text '+i})   
    }
  }
}
