import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { CatalogueComponent } from './componentes/catalogue/catalogue.component';
import { CaloriasComponent } from './componentes/calorias/calorias.component';
import { DiaryComponent } from './componentes/diary/diary.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'calorias', component: CaloriasComponent },
  { path: 'catalogo', component: CatalogueComponent },
  { path: 'diary', component: DiaryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
