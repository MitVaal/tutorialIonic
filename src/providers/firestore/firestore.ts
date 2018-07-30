import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {AuthService} from "../auth.service";
import {Message} from "../../models/message.interface";

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  constructor(public http: HttpClient, public afs: AngularFirestore, public auth: AuthService) {
    console.log('Hello FirestoreProvider Provider');
  }

  public sendMessage(message:Message): Promise<void>{
      const id = this.afs.createId();
      console.log('id firestore : ', id);

      message = Object.assign({}, message);
      console.log('message send to firestore : ', message);

      return this.afs.doc('invitations/'+id).set(message);
  }

  public getMessages() : AngularFirestoreCollection<Message> {
      console.log('ask for chat message');
      let Messages = this.afs.collection<any>('invitations');
      console.log('result', Messages);
      return Messages;
  }

}
