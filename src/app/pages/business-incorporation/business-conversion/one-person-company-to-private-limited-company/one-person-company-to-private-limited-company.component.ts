import { Component, OnInit } from '@angular/core';
import { Header } from './one-person-company-to-private-limited-company.constant';
@Component({
  selector: 'app-one-person-company-to-private-limited-company',
  templateUrl: './one-person-company-to-private-limited-company.component.html',
  styleUrls: ['./one-person-company-to-private-limited-company.component.css']
})
export class OnePersonCompanyToPrivateLimitedCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
