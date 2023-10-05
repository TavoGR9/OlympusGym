import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaColaboradorComponent } from './alta-colaborador/alta-colaborador.component';
import { AsistenciaComponent } from './asistencia/asistencia.component';



@NgModule({
  declarations: [
    AltaColaboradorComponent,
    // AsistenciaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
