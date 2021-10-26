import { Component, OnInit } from '@angular/core';
import {AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  alertController: any;

  constructor(public alertCrtl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {  
    const alert = await this.alertCrtl.create({  
      header: 'Alert',  
      subHeader: 'SubTitle',  
      message: 'This is an alert message',  
      buttons: ['OK']  
    });  
    await alert.present();  
    const result = await alert.onDidDismiss();  
    console.log(result);  
  }  

}
