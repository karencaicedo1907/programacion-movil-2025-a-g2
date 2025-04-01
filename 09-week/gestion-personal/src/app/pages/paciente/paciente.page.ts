import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { FormularioPersonalComponent } from 'src/app/components/formulario-personal/formulario-personal.component';


@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormularioPersonalComponent],
})
export class PacientePage  {
  manejarAccion(event: any) {
    console.log('Acción:', event.tipo, 'Datos:', event.data);
  }
}
