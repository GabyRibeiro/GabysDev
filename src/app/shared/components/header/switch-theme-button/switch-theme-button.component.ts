import { Component, OnInit, Renderer2 } from '@angular/core';
import { Theme, appConfig } from 'src/app/app.config';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'switch-theme-button',
  templateUrl: './switch-theme-button.component.html',
  styleUrls: ['./switch-theme-button.component.scss']
})
export class SwitchThemeButtonComponent implements OnInit {

  constructor(private _renderer: Renderer2, private _appService: AppService) { }

  currentTheme: Theme = appConfig.theme;

  ngOnInit(): void {
    this._appService.getTheme$().subscribe(t => this.currentTheme = t);
  }

  switchToDark() {
    this._appService.setTheme('dark')
  }

  switchToLight() {
    this._appService.setTheme('light')
  }

}
