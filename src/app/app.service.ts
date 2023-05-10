import { BehaviorSubject, Observable, of } from "rxjs";
import { Theme, appConfig } from "./app.config";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AppService {

  private theme$ = new BehaviorSubject<Theme>(appConfig.theme);

  // public get theme() {
  //   return appConfig.theme
  // }

  // public set theme(theme) {
  //   appConfig.theme = theme;
  // }

  setTheme(theme: Theme) {
    appConfig.theme = theme;
    this.theme$.next(theme);
  }

  getTheme$() {
    return this.theme$.asObservable();
  }

}
