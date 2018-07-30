import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestPage } from "../pages/test/test";
import { LoginPage } from "../pages/login/login";
import { AuthService } from "../providers/auth.service";
import { SignupPage } from "../pages/signup/signup";
import {SendMessagePage} from "../pages/send-message/send-message";
import {ListMessagePage} from "../pages/list-message/list-message";
import {DemoPage} from "../pages/demo/demo";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage:any;
  pages: Array<{title: string, component: any}>;


  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    private auth: AuthService,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'test page', component: TestPage },
      { title: 'signup page', component: SignupPage },
      { title: 'sendmessage page', component: SendMessagePage},
      { title: 'listmessage page', component: ListMessagePage},
      { title: 'demo page', component: DemoPage},


    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.rootPage = LoginPage;
    });

      this.auth.afAuth.authState
          .subscribe(
              user => {
                  if (user) {
                      this.rootPage = HelloIonicPage;
                  } else {
                      this.rootPage = LoginPage;
                  }
              },
              () => {
                  this.rootPage = LoginPage;
              }
          );

  }

  login() {
      this.menu.close();
      this.auth.signOut();
      this.nav.setRoot(LoginPage);
  }

  logout() {
      this.menu.close();
      this.auth.signOut();
      this.nav.setRoot(HelloIonicPage);
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
