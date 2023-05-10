import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SwitchThemeButtonComponent } from './switch-theme-button/switch-theme-button.component';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  declarations: [HeaderComponent, SwitchThemeButtonComponent],
})
export class HeaderModule { }
