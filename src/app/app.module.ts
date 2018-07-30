import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { TestPage} from "../pages/test/test";
import { LoginPage } from "../pages/login/login";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from "angularfire2";
import {firebaseConfig} from "../config";
import {AngularFireAuth} from "angularfire2/auth";
import {HttpClientModule} from "@angular/common/http";
import { UserProvider } from '../providers/user/user';
import {AuthService} from "../providers/auth.service";
import {NgxErrorsModule} from "@ultimate/ngxerrors";
import {SignupPage} from "../pages/signup/signup";
import {AngularFirestoreModule} from "angularfire2/firestore";
import { FirestoreProvider } from '../providers/firestore/firestore';
import {SendMessagePage} from "../pages/send-message/send-message";
import {ListMessagePage} from "../pages/list-message/list-message";
import {DemoPage} from "../pages/demo/demo";


@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TestPage,
    LoginPage,
    SignupPage,
    SendMessagePage,
    ListMessagePage,
    DemoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    HttpClientModule,
    NgxErrorsModule,
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    TestPage,
    LoginPage,
    SignupPage,
    SendMessagePage,
    ListMessagePage,
    DemoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    UserProvider,
    UserProvider,
    AuthService,
    FirestoreProvider
  ]
})
export class AppModule {}
