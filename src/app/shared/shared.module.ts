import { AnimateSpinDirective } from './directives/animate-spin.directive';
import { TextRotatorDirective } from './directives/text-rotator.directive';
import { NgModule } from '@angular/core';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  exports: [
    HeaderModule,
    TextRotatorDirective,
    AnimateSpinDirective
  ],
  declarations: [
      TextRotatorDirective,
      AnimateSpinDirective,
   ],
  imports: []
})
export class SharedModule { }
