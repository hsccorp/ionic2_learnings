import {Component,Input} from '@angular/core';
import {IONIC_DIRECTIVES}   from 'ionic-angular';
@Component({
selector: 'my-component',
templateUrl: 'build/components/my-component/my-component.html',

})
export class MyComponent {

 @Input() mydata:any;


constructor() {


}
}