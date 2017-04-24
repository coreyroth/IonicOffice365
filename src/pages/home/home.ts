import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GraphProvider } from './../../providers/graph-provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public graphProvider: GraphProvider) {

  }

  login(event) {
    this.graphProvider.appServiceLogin()
      .then(results => {
        console.log('User logged in - ', results);
      }, error => {
        console.error('Error - ', error);
      });
  }

}
