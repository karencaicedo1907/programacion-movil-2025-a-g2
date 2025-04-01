import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'medico',
    loadComponent: () => import('./pages/medico/medico.page').then( m => m.MedicoPage)
  },
  {
    path: 'enfermero',
    loadComponent: () => import('./pages/enfermero/enfermero.page').then( m => m.EnfermeroPage)
  },
  {
    path: 'recepcionista',
    loadComponent: () => import('./pages/recepcionista/recepcionista.page').then( m => m.RecepcionistaPage)
  },
  {
    path: 'paciente',
    loadComponent: () => import('./pages/paciente/paciente.page').then( m => m.PacientePage)
  },
];
