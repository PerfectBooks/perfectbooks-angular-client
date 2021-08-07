import { Component, OnInit } from '@angular/core';
import { Header } from "./annual-compliance-private-limited-company.constant";
@Component({
  selector: 'app-annual-compliance-private-limited-company',
  templateUrl: './annual-compliance-private-limited-company.component.html',
  styleUrls: ['./annual-compliance-private-limited-company.component.css']
})
export class AnnualCompliancePrivateLimitedCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
