import { Component, OnInit } from '@angular/core';
import { Header } from './partnership-to-private-limited-company.constant';

@Component({
  selector: 'app-partnership-to-private-limited-company',
  templateUrl: './partnership-to-private-limited-company.component.html',
  styleUrls: ['./partnership-to-private-limited-company.component.css']
})
export class PartnershipToPrivateLimitedCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
