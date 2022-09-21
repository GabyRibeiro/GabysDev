import { MatDialog } from '@angular/material/dialog';
import { WorkDialogComponent } from './components/work-dialog/work-dialog.component';
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
      category: 'Site Institucional',
      show: true
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-2',
      category: 'Site Institucional',
      show: true
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-3',
      category: 'Site ONG',
      show: true
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-4',
      category: 'Site Institucional',
      show: true
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-5',
      category: 'Site Institucional',
      show: true
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-6',
      category: 'Site Institucional',
      show: true
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-7',
      category: 'Landing Page',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-8',
      category: 'Site Promocional',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-9',
      category: 'Site Promocional',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-10',
      category: 'Painel Administrativo',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-11',
      category: 'E-mail marketing',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-12',
      category: 'Site Promocional',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-13',
      category: 'Site ONG',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-14',
      category: 'Site Promocional',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-15',
      category: 'Site Promocional',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-16',
      category: 'Site ONG',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-17',
      category: 'Site ONG',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-18',
      category: 'Site Promocional',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-19',
      category: 'Landing Page',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-20',
      category: 'Landing Page',
      show: false
    },
    {
      title: '',
      link: '',
      thumb: 'projeto-21',
      category: 'Site Promocional',
      show: false
    },
  ]

  pagesToDisplay: number = 6;

  workItemsCache: WorkItem[] = []

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.workItemsCache = this.workItems;
  }

  openDetailsDialog(work: WorkItem) {
    this.dialog.open(WorkDialogComponent, {
      data: work,
    });
  }

  loadMore() {
    const nextArr = this.workItems.filter(item => !item.show);
    for (let i = 0; i <= this.pagesToDisplay; i++) {
      nextArr[i].show = true;
    }
  }

  trackByFn(work: WorkItem) {
    return work; // or item.id
  }
}

export interface WorkItem {
  title: string,
  link: string,
  thumb: string,
  category: string,
  show: boolean
};
