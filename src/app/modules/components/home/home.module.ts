import { SharedModule } from './../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ParallaxModule } from '../parallax/parallax.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ParallaxModule
  ],
  exports: [HomeComponent],
  declarations: [HomeComponent]
})
export class HomeModule { }
