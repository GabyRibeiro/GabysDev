import { MainModule } from './modules/main/main.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainComponent } from './modules/main/main.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
