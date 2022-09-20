import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-work-dialog',
  templateUrl: './work-dialog.component.html',
  styleUrls: ['./work-dialog.component.scss']
})
export class WorkDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
