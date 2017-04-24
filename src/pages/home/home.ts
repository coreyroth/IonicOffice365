import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GraphProvider } from './../../providers/graph-provider';
import { UserProfile } from './../../providers/user-profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfile: UserProfile;

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

  getUserProfile(event) {
    this.graphProvider.getUserProfile()
      .then(userProfile => {
        console.log('User profile from graph - ', userProfile);
        this.userProfile = userProfile;
      }, error => {
        console.error('Error - ', error);
      });
  }

}
