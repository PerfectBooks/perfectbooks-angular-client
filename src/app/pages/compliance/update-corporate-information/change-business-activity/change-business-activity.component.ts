import { Component, OnInit } from '@angular/core';
import { Header } from "./change-business-activity.constant";
@Component({
  selector: 'app-change-business-activity',
  templateUrl: './change-business-activity.component.html',
  styleUrls: ['./change-business-activity.component.css']
})
export class ChangeBusinessActivityComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
