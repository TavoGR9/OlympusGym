import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//libreria de inicia rogelio
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { faFacebook, faGoogle, faInstagram, faTwitter, faPaypal, } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './users/user/login/login.component';
import { RecuperarPasswordComponent } from './users/user/recuperar-password/recuperar-password.component';
import { AsistenciaComponent } from './users/admin/asistencia/asistencia.component';
import { EntrenamientoPiernaComponent } from './users/user/entrenamiento-pierna/entrenamiento-pierna.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutUsComponent } from './users/user/about-us/about-us.component';
import { CarouselsComponent } from './users/user/carousels/carousels.component';
//librerias de rogelio termina


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // HeaderComponent,
    // FooterComponent,
    RecuperarPasswordComponent,
    AsistenciaComponent,
    EntrenamientoPiernaComponent,
    RecuperarPasswordComponent,
    AboutUsComponent,
    CarouselsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    SharedModule
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
