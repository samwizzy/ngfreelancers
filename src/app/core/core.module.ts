import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, FontAwesomeModule, MaterialModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
