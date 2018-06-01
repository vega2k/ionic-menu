import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AccountInterface} from "../../model/account";
import {EmailComposer} from "@ionic-native/email-composer";

/**
 * Generated class for the NavPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nav',
  templateUrl: 'nav.html',
})
export class NavPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private emailComposer : EmailComposer) {
  }


  //private accountData = { name : '', email : '' }
  private accountData = {} as AccountInterface;

  ionViewDidLoad() {
    this.accountData = this.navParams.get('account');
  }

  sendEmail(data:AccountInterface) {
    let email = {
      to: data.email,
      subject: 'To :' + data.name,
      body: '',
      isHtml: true
    };

// Send a text message using default options
    this.emailComposer.open(email);
  }

}
