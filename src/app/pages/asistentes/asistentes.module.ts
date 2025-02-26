import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VolverBotonComponent } from 'src/app/volver-boton/volver-boton.component';
import { IonicModule } from '@ionic/angular';

import { AsistentesPageRoutingModule } from './asistentes-routing.module';

import { AsistentesPage } from './asistentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistentesPageRoutingModule,
    VolverBotonComponent
  ],
  declarations: [AsistentesPage]
})
export class AsistentesPageModule {}
