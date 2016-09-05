import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyComponent} from '../../components/my-component/my-component';
import { Page2 } from '../../pages/page2/page2';

@Component({
  templateUrl: 'build/pages/list_vs/list_virtual_scroll.html',
  directives: [MyComponent]
})
export class ListVirtualScroll {
public chats:any;
  constructor(public navCtrl: NavController) {
  this.chats = [];
    
  for(var i=1;i<10000;i++)
   {
       this.chats.push({id:i,name:'Header text '+i,lastText:'Description Text '+i})   
    }
    
    
    }
    
    itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Page2, {
      item: item
    });
    
    
  }
}
