import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListMessagePage } from './list-message';

@NgModule({
  declarations: [
    ListMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(ListMessagePage),
  ],
})
export class ListMessagePageModule {}
