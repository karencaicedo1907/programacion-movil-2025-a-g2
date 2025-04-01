import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { FormularioPersonalComponent } from 'src/app/components/formulario-personal/formulario-personal.component';


@Component({
  selector: 'app-recepcionista',
  templateUrl: './recepcionista.page.html',
  styleUrls: ['./recepcionista.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormularioPersonalComponent],
})
export class RecepcionistaPage {

  manejarAccion(event: any) {
    console.log('Acción:', event.tipo, 'Datos:', event.data);
  }

}
