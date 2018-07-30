import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Message} from "../../models/message.interface";
import {AuthService} from "../../providers/auth.service";
import {FirestoreProvider} from "../../providers/firestore/firestore";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the SendMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-message',
  templateUrl: 'send-message.html',
})
export class SendMessagePage {


  message: Message = new Message();
  public chatMessages: Observable<Message[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService, public firestoreprovider: FirestoreProvider) {
      console.log(this.message);

      this.message.email=this.auth.getEmail()
  }

  sendMessage(){
      this.firestoreprovider.sendMessage(this.message);
      console.log('message', this.message);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad SendMessagePage');
    this.chatMessages = this.firestoreprovider.getMessages().valueChanges();
  }

}
