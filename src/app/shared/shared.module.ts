import { AnimateSpinDirective } from './directives/animate-spin.directive';
import { TextRotatorDirective } from './directives/text-rotator.directive';
import { NgModule } from '@angular/core';
import { HeaderModule } from './components/header/header.module';
import { SwitchThemeButtonComponent } from './components/switch-theme-button/switch-theme-button.component';

@NgModule({
  exports: [
    HeaderModule,
    TextRotatorDirective,
    AnimateSpinDirective
  ],
  declarations: [
      TextRotatorDirective,
      AnimateSpinDirective,
      SwitchThemeButtonComponent
   ],
  imports: []
})
export class SharedModule { }
