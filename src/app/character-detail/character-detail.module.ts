import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CharacterDetailPageRoutingModule } from './character-detail-routing.module';
import { CharacterDetailPage } from './character-detail.page';
import { VolverBotonComponent } from '../volver-boton/volver-boton.component';
import { MenuHamburguesaComponent } from '../menu-hamburguesa/menu-hamburguesa.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterDetailPageRoutingModule,
    VolverBotonComponent,
    MenuHamburguesaComponent
  ],
  declarations: [CharacterDetailPage]
})
export class CharacterDetailPageModule {}
