import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

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
    {
      title: 'Serviços',
      link: 'services',
      icon: 'icon-briefcase',
      active: false
    },
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
    {
      title: 'Contato',
      link: 'contact',
      icon: 'icon-bubbles',
      active: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  activeLink(link: string) {
  }

}

export interface MenuLinks {
  title: string,
  link: string,
  icon: string,
  active: boolean
};
