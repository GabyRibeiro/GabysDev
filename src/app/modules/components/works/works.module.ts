import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorksComponent } from './works.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [WorksComponent],
  exports: [WorksComponent]
})
export class WorksModule { }
