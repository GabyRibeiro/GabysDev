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
      this._renderer.removeClass(document.body, 'dark' || 'light' || 'auto')
      this._renderer.addClass(document.body, appConfig.theme)
    });
  }

  ngOnDestroy() {

  }
}
