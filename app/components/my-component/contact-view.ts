import {Component,Input} from '@angular/core';
import {IONIC_DIRECTIVES}   from 'ionic-angular';
@Component({
selector: 'contact-view',
templateUrl: 'build/components/my-component/contact-view.html',

})
export class ContactView {

 @Input() mydata:any;


constructor() {


}
}