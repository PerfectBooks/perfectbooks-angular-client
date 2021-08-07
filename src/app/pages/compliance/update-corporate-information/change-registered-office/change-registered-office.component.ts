import { Component, OnInit } from '@angular/core';
import { Header } from "./change-registered-office.constant";
@Component({
  selector: 'app-change-registered-office',
  templateUrl: './change-registered-office.component.html',
  styleUrls: ['./change-registered-office.component.css']
})
export class ChangeRegisteredOfficeComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
