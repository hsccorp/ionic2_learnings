import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hotspot, Network } from 'ionic-native';
import {WiFiView} from '../../components/my-component/scan-wifi-view';


@Component({
  templateUrl: 'build/pages/wifi/wifi.html',
  directives: [WiFiView]
})
export class WiFi {
  selectedItem: any;
  mNetworks: Array<Network>;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, navParams: NavParams) {
       Hotspot.scanWifi().then((networks: Array<Network>) => {
       this.mNetworks=networks;
       console.log(this.mNetworks);
    });
  }
}
