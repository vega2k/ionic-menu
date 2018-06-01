import { Component } from '@angular/core';
import {AlertController, LoadingController, ModalController, NavController, ToastController} from 'ionic-angular';
import {Profile} from "../../model/profile";
import {LoadingProvider} from "../../providers/loading/loading";
import {AccountInterface} from "../../model/account";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public profile = {} as Profile;

  constructor(public navCtrl: NavController,
              public modalCtrl:ModalController,
              public alertCtrl:AlertController,
              public toastCtrl:ToastController,
              public loadingProvider:LoadingProvider) {
              //public loadingCtrl:LoadingController) {

  }

  clickButton(event) {
    this.navCtrl.push('bindPage');
  }

  modal() {
    let modal = this.modalCtrl.create('modalPage');
    modal.onDidDismiss(data => {
      console.log(data);
      console.log(data.actionSwitch);
      this.profile.actionSwitch = data.actionSwitch;
      this.profile.name = data.name;
      this.profile.gender = data.gender;
      this.profile.domestic = data.domestic;
      this.profile.startDate = data.startDate;
    });
    modal.present();
  }

  // private accountData = {
  //   name : '',
  //   email : ''
  // }

  private accountData = {} as AccountInterface;

  promptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "이름과 E-Mail를 입력하세요",
      inputs: [
        { name: 'name', placeholder: 'Name 입력' },
        { name: 'email', placeholder: 'Email 입력' },
      ],
      buttons: [
        { text: '취소', handler: data => { console.log('Cancel clicked'); } },
        {
          text: '저장',
          handler: data => {
            this.accountData = { name : data.name, email : data.email }
            this.navCtrl.push('NavPage',{account:this.accountData});
          }
        }
      ]
    });
    prompt.present();
  }

  toast() {
    let toast = this.toastCtrl.create({
      message: '3초 동안 보였다가 사라집니다.',
      duration: 3000,
      position : 'top',
    });
    toast.present();
  }

  loading() {
    // let loading = this.loadingCtrl.create({
    //   content: '잠시만 기다려주세요...'
    // });

    //loading.present();

    // setTimeout(() => {
    //   loading.dismiss();
    // }, 3000);

    this.loadingProvider.show();

    setTimeout(() => {
      this.loadingProvider.hide();
    }, 3000);
  }


}
