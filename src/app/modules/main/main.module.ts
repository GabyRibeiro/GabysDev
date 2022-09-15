import { AboutMeModule } from './../components/about-me/about-me.module';
import { CommonModule } from '@angular/common';
import { HomeModule } from './../components/home/home.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { mainRoutes } from './main.routing';
import { HomeComponent } from '../components/home/home.component';
import { ExperienceModule } from '../components/experience/experience.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(mainRoutes),
    HomeModule,
    CommonModule,
    AboutMeModule,
    ExperienceModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
