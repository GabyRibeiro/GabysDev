import { Component, OnInit, ElementRef, Renderer2, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Theme, appConfig } from 'src/app/app.config';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  currentTheme: Theme = appConfig.theme;

  @Output() $opened = new EventEmitter<any>();

  menu_links: MenuLinks[] = [
    {
      title: 'Home',
      link: 'home',
      icon: 'icon-home',
      active: true
    },
    {
      title: 'Sobre mim',
      link: 'about',
      icon: 'icon-user-following',
      active: false
    },
    // {
    //   title: 'Serviços',
    //   link: 'services',
    //   icon: 'icon-briefcase',
    //   active: false
    // },
    {
      title: 'Experiência',
      link: 'experience',
      icon: 'icon-graduation',
      active: false
    },
    {
      title: 'Trabalhos',
      link: 'works',
      icon: 'icon-layers',
      active: false
    },
    // {
    //   title: 'Contato',
    //   link: 'contact',
    //   icon: 'icon-bubbles',
    //   active: false
    // },
  ];

  open: boolean = false;

  constructor(private _el: ElementRef, private _renderer: Renderer2, private _appService: AppService) { }

  ngOnInit() {
    this._appService.getTheme$().subscribe(t => this.currentTheme = t);
  }

  activeLink(link: string) {
  }

  toggleMenu() {
    this.open = !this.open;
    this.$opened.emit(this.open);
  }

}

export interface MenuLinks {
  title: string,
  link: string,
  icon: string,
  active: boolean
};
