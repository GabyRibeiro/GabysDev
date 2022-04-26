import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'principal',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  open: boolean =  false;
  constructor() { }

  ngOnInit() {
  }

  opened(value: any) {
    this.open = value;
  }

}
