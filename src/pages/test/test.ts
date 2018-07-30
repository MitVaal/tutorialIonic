import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  users:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider:UserProvider) {
    this.getUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }


  getUsers(){
    this.userProvider.getUsersApi().then(
        data =>{
          if(data['data']){
            this.users = data['data'];
          }
        },
        err => {
          console.log(err)
        }
    )
  }



}
