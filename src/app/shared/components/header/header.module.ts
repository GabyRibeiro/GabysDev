import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

@NgModule({
  exports: [
    HeaderComponent
  ],
  imports: [CommonModule],
  declarations: [HeaderComponent],
})
export class HeaderModule { }
