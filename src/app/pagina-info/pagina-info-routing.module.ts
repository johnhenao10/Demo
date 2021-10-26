import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaInfoPage } from './pagina-info.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaInfoPageRoutingModule {}
