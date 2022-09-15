import { ParallaxComponent } from './parallax.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ParallaxComponent],
  imports: [
    CommonModule
  ],
  exports: [ParallaxComponent]
})
export class ParallaxModule { }
