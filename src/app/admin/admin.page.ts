import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  AlertController
} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent
  ]
})
export class AdminPage {

  private router = inject(Router);
  private alertController = inject(AlertController);

  lugares = [
    {
      nombre: 'Cartagena',
      descripcion: 'Ciudad histórica con murallas.',
      categoria: 'Ciudad'
    },
    {
      nombre: 'Parque Tayrona',
      descripcion: 'Playas y naturaleza.',
      categoria: 'Parque Natural'
    }
  ];

  async agregarLugar() {

    const alert = await this.alertController.create({
      header: 'Agregar Lugar',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'descripcion',
          type: 'text',
          placeholder: 'Descripción'
        },
        {
          name: 'categoria',
          type: 'text',
          placeholder: 'Categoría'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Guardar',
          handler: (data) => {

            this.lugares.push({
              nombre: data.nombre,
              descripcion: data.descripcion,
              categoria: data.categoria
            });
            console.log('Lista actual:', this.lugares);
          }
        }
      ]
    });

    await alert.present();
  }

  eliminarLugar(index: number) {
    this.lugares.splice(index, 1);
  }

  cerrarSesion() {
    this.router.navigate(['/']);
  }

}
