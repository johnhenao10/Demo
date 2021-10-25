import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  form1: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController) {
    this.form1 = this.fb.group({
      cancha: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      precio: new FormControl('',[Validators.required])
    });
  }

  ngOnInit() {
  }

  async registrar(){
    if(this.form1.invalid){
      const alert = await this.alertController.create({
        header: 'ERROR',
        message: 'Complete todo el formulario',
        buttons: ['OK']
      });
      await alert.present();
      return;
  }
}
}
