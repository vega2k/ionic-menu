import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {Profile} from "../../model/profile";

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name:'modalPage',
})
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController,
              public viewCtrl:ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  public profile = {} as Profile;

  notify(event)
  {
    console.log(event.checked);
    // if(event.checked) {
    //   this.profile.actionSwitch = "true";
    // }else {
    //   this.profile.actionSwitch = "false";
    // }
    this.profile.actionSwitch = event.checked;
    console.log('-----------');
    console.log(this.profile.actionSwitch);
  }

  save() {
    console.log(this.profile);
    this.viewCtrl.dismiss(this.profile);
  }

}
