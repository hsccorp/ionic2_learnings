import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SQLite } from 'ionic-native';

@Component({
  templateUrl: 'build/pages/sqlite/sqlite.html'
})
export class sqlite {
public db:SQLite;
value:any;
 public people: Array<Object>;
  

  constructor(public navCtrl: NavController) {
  this.db = new SQLite();
  this.db.openDatabase({
  name: 'data.db1',
  location: 'default' 
  }).then(() => {
  this.db.executeSql('create table IF NOT EXISTS people(name TEXT)',[]).then(() => {

  }, (err) => {
    console.error('Unable to execute sql: ', err);
  });
  }, (err) => {
  console.error('Unable to open database: ', err);
  });
  
  this.refresh();
    
  }
  
  save()
  {
  console.log("Value "+this.value);
  let value1=this.value.toString();
  
  
  this.db.openDatabase({
  name: 'data.db1',
  location: 'default' 
  }).then(() => {
  this.db.executeSql("INSERT INTO people(name) VALUES (?)",[this.value]).then((data) => {
            console.log("INSERTED: " + JSON.stringify(data));
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error.err));
        });
        }, (err) => {
  console.error('Unable to open database: ', err);
  });
  this.refresh();
  }
  
   public refresh() {
   
   this.db.openDatabase({
  name: 'data.db1',
  location: 'default' 
  }).then(() => {  
        this.db.executeSql("SELECT * FROM people",[]).then((data) => {
        this.people = [];
     
      
            if(data.rows.length > 0) {
            
                 for(let i = 0; i < data.rows.length; i++) {
                    this.people.push({name: data.rows.item(i).name});
                }
            }
           
        }, (error) => {
            console.log("ERROR: " + JSON.stringify(error));
        });
        },(err) => {
  console.error('Unable to open database: ', err);
  });
    }

  
}
