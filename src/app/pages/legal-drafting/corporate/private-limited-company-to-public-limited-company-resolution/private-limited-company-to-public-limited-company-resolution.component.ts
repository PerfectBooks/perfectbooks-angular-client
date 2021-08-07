import { Component, OnInit } from '@angular/core';
import { Header } from "./private-limited-company-to-public-limited-company-resolution.constant";

@Component({
  selector: 'app-private-limited-company-to-public-limited-company-resolution',
  templateUrl: './private-limited-company-to-public-limited-company-resolution.component.html',
  styleUrls: ['./private-limited-company-to-public-limited-company-resolution.component.css']
})
export class PrivateLimitedCompanyToPublicLimitedCompanyResolutionComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
