import { Component, ViewEncapsulation, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'gabysdev';

  constructor(private _renderer: Renderer2) {}

  ngOnInit(): void {
      this._renderer.addClass(document.body, 'dark');
  }
}
