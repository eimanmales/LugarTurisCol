import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton
  ]
})
export class LoginPage {

  usuario: string = '';
  password: string = '';

  private router = inject(Router);
  private alertController = inject(AlertController);

  async ingresar() {

    if (
      this.usuario === 'admin' &&
      this.password === 'admin'
    ) {

      this.router.navigate(['/admin']);

    } else {

      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }
}
