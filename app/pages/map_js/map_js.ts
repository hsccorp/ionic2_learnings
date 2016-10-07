import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';

declare var google;






@Component({
  templateUrl: 'build/pages/map_js/map_js.html'
})
export class MapJs {

map:any;



 
 
  

  constructor(public navCtrl: NavController,platform:Platform) {
  
  platform.ready().then(() => {
  
  this.loadMap();
  
  });
  }
  
  loadMap()
  {
  
  
  let latLng = new google.maps.LatLng(-34.9290, 138.6010);
 
    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
 
    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
 

  

}
}