import {Component,Input} from '@angular/core';
import {IONIC_DIRECTIVES}   from 'ionic-angular';
@Component({
selector: 'wifi-view',
templateUrl: 'build/components/my-component/scan-wifi-view.html',

})
export class WiFiView {

 @Input() networkdata:any;


constructor() {


}
}