import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePicker } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/date_picker/date_picker.html'
})
export class Datepicker {
public Date:any;

  constructor(public navCtrl: NavController) {
  }
  
  datePicker()
  {
  DatePicker.show({
  date: new Date(),
  mode: 'date'
  }).then(
  date => this.Date=date,
  err => console.log('Error occurred while getting date: ', err)
  );
  console.log("Date is "+this.Date);
  }
}
