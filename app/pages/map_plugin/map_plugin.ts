import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import {GoogleMap, GoogleMapsEvent, GoogleMapsLatLng,GoogleMapsMarkerOptions,GoogleMapsMarker} from 'ionic-native';
import { Geolocation } from 'ionic-native';




@Component({
  templateUrl: 'build/pages/map_plugin/map_plugin.html'
})
export class Map {

 map: GoogleMap;
 currentlocation:any;
 watch:any;
 currentLatitude:any;
 currentLongitude:any;
 changedLocation:any;
  

  constructor(public navCtrl: NavController,private platform: Platform) {
  
 platform.ready().then(() => {
            this.loadMap();
            this.watchPosition();
            
            
        });
    }
    
    loadMap()
    {
        
    Geolocation.getCurrentPosition().then((resp) => {
    console.log("geolocation function is working");
    
    console.log(resp.coords.latitude,resp.coords.longitude);
 
  this.currentlocation = new GoogleMapsLatLng(resp.coords.latitude,resp.coords.longitude);
   this.map = new GoogleMap('map', {
            'controls': {
            'compass': true,
            'myLocationButton': true,
            'indoorPicker': true,
            'zoom': true
          },
          'gestures': {
            'scroll': true,
            'tilt': true,
            'rotate': true,
            'zoom': true
          },
          'camera': {
            'latLng': this.currentlocation,
            'tilt': 30,
            'zoom': 18,
            'bearing':50
          }
        });
        
        this.currentLatitude=resp.coords.latitude;
        this.currentLongitude=resp.coords.longitude;
 
        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
        
        
            console.log('Map is ready!');
            
            let markerOptions: GoogleMapsMarkerOptions = {
            position: this.currentlocation,
            title: 'Ionic',
            draggable:true,
            
            };
            
            this.map.addMarker(markerOptions)
           .then((marker: GoogleMapsMarker) => {
           
            
            console.log("marker is working");
            marker.showInfoWindow();
            
  });
})
        });
        
        



     
    }
    
    watchPosition()
    {
    
    
    
     this.watch = Geolocation.watchPosition();
    this.watch.subscribe((data) => {
 
    console.log(data.coords.latitude);
    console.log(data.coords.longitude);
    
    let calculatedDistance=this.calculateDistance( this.currentLatitude, this.currentLongitude,data.coords.latitude,data.coords.longitude);
    
    console.log("calculated distance "+calculatedDistance);
    
    if(calculatedDistance>=2)
    {
    
    
    this.changedLocation = new GoogleMapsLatLng(data.coords.latitude,data.coords.longitude);
    console.log("distance travelled "+calculatedDistance);
    this.currentLatitude=data.coords.latitude;
    this.currentLongitude=data.coords.longitude;
    console.log("changed currentlatitude is " +this.currentLatitude+ "changed currentlongitude" +this.currentLongitude);
    
    let markerOptions: GoogleMapsMarkerOptions = {
    title: 'locationChanged',
    draggable:true,
    position:this.changedLocation
    
};

 this.map.addMarker(markerOptions)
           .then((marker: GoogleMapsMarker) => {
            console.log("marker is working");
            marker.showInfoWindow();
  });
  }
});
    
    }
    
    calculateDistance(currentlat,currentlng,lat,lng)
    {
    console.log(currentlat,currentlng,lat,lng);
    
    let R = 6378137; // Earth’s mean radius in meter
    let dLat = this.rad(currentlat-lat);
    let dLong = this.rad(currentlng-lng);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(this.rad(currentlat)) * Math.cos(this.rad(currentlng)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    
    return d;
    
   
    }
    
     rad(x)  {
  return x * Math.PI / 180;
             };
    
    }
  

