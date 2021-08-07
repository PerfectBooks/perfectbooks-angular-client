import { Component, OnInit } from '@angular/core';
import { Header } from "./change-company-name.constant";
@Component({
  selector: 'app-change-company-name',
  templateUrl: './change-company-name.component.html',
  styleUrls: ['./change-company-name.component.css']
})
export class ChangeCompanyNameComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
