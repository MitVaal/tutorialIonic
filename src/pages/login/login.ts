import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth.service';
import {HelloIonicPage} from "../hello-ionic/hello-ionic";
import { SignupPage } from '../signup/signup';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

    loginForm: FormGroup;
    loginError: string;

  constructor(private navCtrl: NavController, private auth: AuthService, fb: FormBuilder) {
      this.loginForm = fb.group({
          email: ['', Validators.compose([Validators.required, Validators.email])],
          password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
      });
  }

    login() {
        let data = this.loginForm.value;

        if (!data.email) {
            return;
        }

        let credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(
                () => this.navCtrl.setRoot(HelloIonicPage),
                error => this.loginError = error.message
            );
    }


    signup(){
        this.navCtrl.push(SignupPage);
    }

    loginWithGoogle():any {
        this.auth.signInWithGoogle()
            .then(
                () => this.navCtrl.setRoot(HelloIonicPage),
                error => console.log(error.message)
            );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
