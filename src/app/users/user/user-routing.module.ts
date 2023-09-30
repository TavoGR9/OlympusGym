import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderComponent, FooterComponent
  ]
})
export class UserRoutingModule { }
