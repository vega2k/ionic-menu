import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

/**
 * Generated class for the ActionsheetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actionsheet',
  templateUrl: 'actionsheet.html',
})
export class ActionsheetPage {

  constructor(public navCtrl: NavController,
              public actionsheetCtrl:ActionSheetController,
              public platform:Platform,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionsheetPage');
    this.actionSheet();
  }

  actionSheet() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Choose Menu',   cssClass: 'action-sheets-basic-page',
      buttons: [ {
        text: 'Share',
        icon: !this.platform.is('ios') ? 'share' : null,
        handler: () => { console.log('Share clicked'); }
      },
        {
          text: 'Search',
          icon: !this.platform.is('ios') ? 'search' : null,
          handler: () => { console.log('Search clicked'); }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => { console.log('Cancel clicked');}
        }
      ] });
    actionSheet.present();
  }

}
