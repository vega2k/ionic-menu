import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AccountInterface} from "../../model/account";
import {EmailComposer} from "@ionic-native/email-composer";
import {SMS} from "@ionic-native/sms";

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

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private emailComposer : EmailComposer,
              private sms : SMS,
              private alertCtrl:AlertController) {
  }


  //private accountData = { name : '', email : '' }
  private accountData = {} as AccountInterface;

  ionViewDidLoad() {
    this.accountData = this.navParams.get('account');
  }

  sendEmail() {
    let email = {
      to: this.accountData.email,
      subject: 'To :' + this.accountData.name,
      body: '',
      isHtml: true
    };

// Send a text message using default options
    this.emailComposer.open(email);
  }

  sendSMS() {
    let prompt = this.alertCtrl.create({
      title: 'SMS',
      message: "메세지를 작성하여 주시기 바랍니다.",
      inputs: [
        {
          name: 'phone',
          placeholder: 'phone number Here....'
        },
        {
          name: 'message',
          placeholder: 'Message Here....'
        },
      ],
      buttons: [
        {
          text: '취소',
          handler: data => { console.log('취소 clicked'); }
        },
        {
          text: '보내기',
          handler: data => { this.sms.send(data.phone, data.message);}
        }
      ]
    });
    prompt.present();

  }
}
