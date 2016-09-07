import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ContactView} from '../../components/my-component/contact-view';
import {Contacts} from 'ionic-native';

@Component({
  templateUrl: 'build/pages/contacts/contact_list.html',
  directives: [ContactView]
})
export class ContactList {
public contactsfound:any;
 constructor(public navCtrl: NavController) {
 this.contactsfound = [];
 
 //Hemant: Need to explore more about the way to get the contact list
 // as it is taking 7-10 second to load
 
 Contacts.find(['displayName1']).then((contacts) => {
          this.contactsfound = contacts;
          //alert(contacts.length);
          alert(JSON.stringify(contacts[0]));
          })
          
          
          
  

    

  }
}
