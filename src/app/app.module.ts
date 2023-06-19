import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CaloriasComponent } from './componentes/calorias/calorias.component';
import { DiaryComponent } from './componentes/diary/diary.component';
import { CatalogueComponent } from './componentes/catalogue/catalogue.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CaloriasComponent,
    DiaryComponent,
    CatalogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
