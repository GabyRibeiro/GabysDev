import { TextRotatorDirective } from './directives/text-rotator.directive';
import { NgModule } from '@angular/core';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  exports: [
    HeaderModule,
    TextRotatorDirective
  ],
  declarations: [
      TextRotatorDirective
   ],
  imports: []
})
export class SharedModule { }
