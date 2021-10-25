import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
/*import { ConsoleReporter } from 'jasmine';*/


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formulario: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) {
    this.formulario = this.fb.group({
      usuario: new FormControl('',[Validators.required]),
      contraseña: new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
  }

  async ingresar(){
    if(this.formulario.valid){
      const alert = await this.alertController.create({
        header: 'ERROR',
        message: 'Complete todo el formulario',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }else{
      console.log('Listo');
      this.navCtrl.navigateRoot('inicio')
    }
  }
}
