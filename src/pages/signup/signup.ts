import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HelloIonicPage} from "../hello-ionic/hello-ionic";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from "../../providers/auth.service";



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'as-page-signup',
  templateUrl: './signup.html',
})
export class SignupPage {
    signupError: string;
    form: FormGroup;

  constructor(private navCtrl: NavController, fb: FormBuilder, private auth: AuthService) {
      this.form = fb.group({
          email: ['', Validators.compose([Validators.required, Validators.email])],
          password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });

  }

    signup() {
        let data = this.form.value;
        let credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signUp(credentials).then(
            () => this.navCtrl.setRoot(HelloIonicPage),
            error => this.signupError = error.message
        );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
