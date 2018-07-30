import { Component } from '@angular/core';
import { DemoPage } from "../demo/demo";
import { AuthService } from "../../providers/auth.service";


@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  name:string;
  pushPage:any;
  params: Object;


    constructor(public auth: AuthService) {
    this.name = 'Olivier';
    this.pushPage = DemoPage;
    this.params = { 'UserEmail' : this.auth.getEmail()};
  }
}
