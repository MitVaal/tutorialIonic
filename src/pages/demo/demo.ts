import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

    email: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.email = this.navParams.get('UserEmail');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }

}
