import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { Page2 } from './pages/page2/page2';
import { ListVirtualScroll } from './pages/list_vs/list_virtual_scroll';
import { ContactList } from './pages/contacts/contact_list';
import { List1000 } from './pages/list_1000/list_1000';
import { List500 } from './pages/list_500/list_500';
import { Videos } from './pages/videos/videos';
import { ActionSheet } from './pages/actionsheet/actionsheet';


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ListVirtualScroll;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    console.log("application constructor called");
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
    
      { title: 'List 10000 (Using Virtual Scroll)', component: ListVirtualScroll},
      { title: 'Contacts', component: ContactList },
      { title: 'List ngfor 500', component: List500 },
      { title: 'List ngfor 1000', component: List1000 },
       { title: 'Videos', component: Videos },
         { title: 'Action Sheet', component: ActionSheet }
    
     
    ];
    
   
     
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp);
