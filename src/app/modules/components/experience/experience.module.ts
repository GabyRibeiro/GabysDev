import { ExperienceComponent } from './experience.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExperienceComponent],
  exports: [ExperienceComponent]
})
export class ExperienceModule { }
