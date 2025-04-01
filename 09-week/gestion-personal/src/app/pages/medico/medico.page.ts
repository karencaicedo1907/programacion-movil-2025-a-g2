import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioPersonalComponent } from '../../components/formulario-personal/formulario-personal.component';

@Component({
  selector: 'app-medico',
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, FormularioPersonalComponent],
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})
export class MedicoPage {
  manejarAccion(event: any) {
    console.log('Acción:', event.tipo, 'Datos:', event.data);
  }
}
