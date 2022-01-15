import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-notice',
  templateUrl: './list-notice.component.html',
  styleUrls: ['./list-notice.component.css']
})
export class ListNoticeComponent implements OnInit {

  @Input() listNoticias: any[];

  constructor() {
    this.listNoticias= [];
   }

  ngOnInit(): void {
  }

}
