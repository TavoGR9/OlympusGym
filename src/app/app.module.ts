import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//libreria de inicia rogelio
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { faFacebook, faGoogle, faInstagram, faTwitter, faPaypal, } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './users/user/login/login.component';
import { HeaderComponent } from '../app/shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { RecuperarPasswordComponent } from './users/user/recuperar-password/recuperar-password.component';
import { AsistenciaComponent } from './users/admin/asistencia/asistencia.component';
//librerias de rogelio termina

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RecuperarPasswordComponent,
    AsistenciaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebook, faGoogle, faInstagram, faTwitter, faCircleUser, faCreditCard, faPaypal
    );
  }
 }
