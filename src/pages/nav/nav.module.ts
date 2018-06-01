import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavPage } from './nav';
import {EmailComposer} from "@ionic-native/email-composer";
import {SMS} from "@ionic-native/sms";

@NgModule({
  declarations: [
    NavPage,
  ],
  imports: [
    IonicPageModule.forChild(NavPage),
  ],
  providers: [
    EmailComposer,SMS
  ]
})
export class NavPageModule {}
