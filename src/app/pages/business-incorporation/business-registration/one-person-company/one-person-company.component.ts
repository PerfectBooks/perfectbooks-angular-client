import { Component, OnInit } from '@angular/core';
import { Header } from './one-person-company.constant';
@Component({
  selector: 'app-one-person-company',
  templateUrl: './one-person-company.component.html',
  styleUrls: ['./one-person-company.component.css']
})
export class OnePersonCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
