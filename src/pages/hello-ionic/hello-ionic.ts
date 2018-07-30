import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  name:string;

  constructor() {
    this.name = 'Olivier';
  }
}
