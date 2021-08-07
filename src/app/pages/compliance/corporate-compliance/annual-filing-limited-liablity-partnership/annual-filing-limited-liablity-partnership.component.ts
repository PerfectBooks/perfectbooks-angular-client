import { Component, OnInit } from '@angular/core';
import { Header } from "./annual-filing-limited-liablity-partnership.constant";
@Component({
  selector: 'app-annual-filing-limited-liablity-partnership',
  templateUrl: './annual-filing-limited-liablity-partnership.component.html',
  styleUrls: ['./annual-filing-limited-liablity-partnership.component.css']
})
export class AnnualFilingLimitedLiablityPartnershipComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
