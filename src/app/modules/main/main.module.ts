import { HomeModule } from './../components/home/home.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { mainRoutes } from './main.routing';
import { HomeComponent } from '../components/home/home.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(mainRoutes),
    HomeModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
