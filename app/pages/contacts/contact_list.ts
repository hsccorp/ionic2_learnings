import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactView} from '../../components/my-component/contact-view';
import {Contacts} from 'ionic-native';
import { LoadingController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contacts/contact_list.html',
  directives: [ContactView]
})
export class ContactList {
public contactsfound:any;
public loader:any;
 constructor(public navCtrl: NavController,public loadingCtrl: LoadingController) {
 this.presentLoading();
 this.contactsfound = [];

 
 //Hemant: Need to explore more about the way to get the contact list
 // as it is taking 7-10 second to load
 
 Contacts.find(['*'], {filter: ""}).then((contacts) => {
  this.loader.dismiss();
          this.contactsfound = contacts;
          //alert(contacts.length);
          alert(JSON.stringify(contacts[0]));
          })
          
          
  }
  
  presentLoading() {
   this.loader = this.loadingCtrl.create({
      content: "Loading contacts...",
    });
    this.loader.present();
  }
}
