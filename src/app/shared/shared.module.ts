import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faGoogle, faInstagram, faTwitter, faPaypal, } from '@fortawesome/free-brands-svg-icons';
import { faCircleUser, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule, 
    MatMenuModule, 
    MatIconModule
    
  ]
})

export class SharedModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebook, faGoogle, faInstagram, faTwitter, faCircleUser, faCreditCard, faPaypal
    ); 
  }
}
