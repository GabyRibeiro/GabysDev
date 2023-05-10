import { Component, ViewEncapsulation, OnInit, ElementRef, Renderer2, HostBinding, OnDestroy } from '@angular/core';
import { Theme, appConfig } from './app.config';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private _renderer: Renderer2, private _appService: AppService) {}

  title = 'gabysdev';

  ngOnInit(): void {
    this._appService.getTheme$().subscribe(t => {
      const current = appConfig.theme === 'dark' ? 'light' : 'dark'
      this._renderer.removeClass(document.body, current)
      this._renderer.addClass(document.body, appConfig.theme)
    });
  }

  ngOnDestroy() {

  }
}
