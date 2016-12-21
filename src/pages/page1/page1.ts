import { Component } from '@angular/core';

import { NavController, LoadingController, ToastController, ActionSheetController, AlertController, ModalController } from 'ionic-angular';

import { Page2 } from '../page2/page2';
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController) {

  }

  ionViewDidEnter() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      dismissOnPageChange: true
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss().then(() => {
        let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000
        });
        toast.present();
        toast.onDidDismiss(() => {
          let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
              {
                text: 'Destructive',
                role: 'destructive',
                handler: () => {
                  console.log('Destructive clicked');
                }
              }, {
                text: 'Archive',
                handler: () => {
                  console.log('Archive clicked');
                }
              }, {
                text: 'Cancel',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
              }
            ]
          });
          actionSheet.present();
          actionSheet.onDidDismiss(() => {
            let confirm = this.alertCtrl.create({
              title: 'Use this lightsaber?',
              message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
              buttons: [
                {
                  text: 'Disagree',
                  handler: () => {
                    console.log('Disagree clicked');
                  }
                },
                {
                  text: 'Agree',
                  handler: () => {
                    console.log('Agree clicked');
                  }
                }
              ]
            });
            confirm.present();
            confirm.onDidDismiss(() => {
              let modal = this.modalCtrl.create(Page2);
              modal.present();
            })
          })
        });
      })
    }, 3000);
  }

}
