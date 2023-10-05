import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle, faInstagram, faTwitter, faPaypal, } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { FinalizarCompraComponent } from './finalizar-compra/finalizar-compra.component';
import { EntrenamientoPiernaComponent } from './entrenamiento-pierna/entrenamiento-pierna.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselsComponent } from './carousels/carousels.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecuperarPasswordComponent,
    FinalizarCompraComponent,
    EntrenamientoPiernaComponent,
    AboutUsComponent,
    CarouselsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatMenuModule, 
    MatButtonModule,
    BrowserModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule, 
    FormsModule 
  ]
})
export class UserModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebook, faGoogle, faInstagram, faTwitter, faCircleUser, faCreditCard, faPaypal
    ); 
  }
}
