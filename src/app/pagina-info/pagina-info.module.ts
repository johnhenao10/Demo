import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaInfoPageRoutingModule } from './pagina-info-routing.module';

import { PaginaInfoPage } from './pagina-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaInfoPageRoutingModule
  ],
  declarations: [PaginaInfoPage]
})
export class PaginaInfoPageModule {}
