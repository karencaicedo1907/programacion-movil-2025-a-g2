import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-personal',
  templateUrl: './formulario-personal.component.html',
  styleUrls: ['./formulario-personal.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule]
})
export class FormularioPersonalComponent {
  @Input() tipoPersonal: string = '';
  @Output() accion = new EventEmitter<{ tipo: string, data: any }>();

  form: FormGroup;
  listaPersonal: any[] = []; // Lista para almacenar los registros

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(18)]],
      correo: ['', [Validators.required, Validators.email]],
      campo1: ['', Validators.required],
      campo2: ['', Validators.required],
      especialidad: [''],
      numeroLicencia: [''],
      turnoAsignado: [''],
      areaAtencion: [''],
      horarioLaboral: [''],
      extensionTelefonica: [''],
      numeroHistoriaClinica: [''],
      tipoAfiliacion: ['']
    });
  }

  ngOnChanges() {
    this.actualizarCampos();
  }

  actualizarCampos() {
    this.form.patchValue({
      especialidad: '',
      numeroLicencia: '',
      turnoAsignado: '',
      areaAtencion: '',
      horarioLaboral: '',
      extensionTelefonica: '',
      numeroHistoriaClinica: '',
      tipoAfiliacion: ''
    });

    if (this.tipoPersonal === 'medico') {
      this.form.controls['campo1'].setValue('Especialidad');
      this.form.controls['campo2'].setValue('Número de licencia médica');
    } else if (this.tipoPersonal === 'enfermero') {
      this.form.controls['campo1'].setValue('Turno asignado');
      this.form.controls['campo2'].setValue('Área de atención');
    } else if (this.tipoPersonal === 'recepcionista') {
      this.form.controls['campo1'].setValue('Horario laboral');
      this.form.controls['campo2'].setValue('Extensión telefónica');
    } else if (this.tipoPersonal === 'paciente') {
      this.form.controls['campo1'].setValue('Número de historia clínica');
      this.form.controls['campo2'].setValue('Tipo de afiliación');
    }
  }

  ejecutarAccion(tipo: string) {
    if (this.form.valid) {
      const data = { ...this.form.value, tipo: this.tipoPersonal };

      if (tipo === 'agregar') {
        this.listaPersonal.push(data);
      } else if (tipo === 'modificar') {
        const index = this.listaPersonal.findIndex(persona => persona.correo === data.correo);
        if (index !== -1) {
          this.listaPersonal[index] = data;
        }
      } else if (tipo === 'eliminar') {
        this.listaPersonal = this.listaPersonal.filter(persona => persona.correo !== data.correo);
      } else if (tipo === 'consultar') {
        console.log('Lista actual:', this.listaPersonal);
      }

      this.accion.emit({ tipo, data });
    }
  }
}
