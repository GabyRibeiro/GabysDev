import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  workItems: WorkItem[] = [
    {
      title: '',
      link: '',
      thumb: 'projeto-1',
      category: 'Site Institucional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-2',
      category: 'Site Institucional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-3',
      category: 'Site ONG'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-4',
      category: 'Site Institucional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-5',
      category: 'Site Institucional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-6',
      category: 'Site Institucional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-7',
      category: 'Landing Page'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-8',
      category: 'Site Promocional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-9',
      category: 'Site Promocional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-10',
      category: 'Painel Administrativo'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-11',
      category: 'E-mail marketing'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-12',
      category: 'Site Promocional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-13',
      category: 'Site ONG'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-14',
      category: 'Site Promocional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-15',
      category: 'Site Promocional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-16',
      category: 'Site ONG'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-17',
      category: 'Site ONG'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-18',
      category: 'Site Promocional'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-19',
      category: 'Landing Page'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-20',
      category: 'Landing Page'
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-21',
      category: 'Site Promocional'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface WorkItem {
  title: string,
  link: string,
  thumb: string,
  category: string
};
