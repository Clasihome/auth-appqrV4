import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VolverBotonComponent } from 'src/app/volver-boton/volver-boton.component';
import { IonicModule } from '@ionic/angular';
import { LogoutButtonComponent } from 'src/app/logout-button/logout-button.component';
import { CreateClassPageRoutingModule } from './create-class-routing.module';

import { CreateClassPage } from './create-class.page';

@NgModule({
  imports: [
    CommonModule,
    VolverBotonComponent,
    FormsModule,
    IonicModule,
    CreateClassPageRoutingModule,
    
  ],
  declarations: [CreateClassPage]
})
export class CreateClassPageModule {}
