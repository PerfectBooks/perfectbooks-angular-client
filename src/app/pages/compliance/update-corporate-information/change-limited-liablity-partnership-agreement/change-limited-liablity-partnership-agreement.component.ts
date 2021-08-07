import { Component, OnInit } from '@angular/core';
import { Header } from "./change-limited-liablity-partnership-agreement.constant";
@Component({
  selector: 'app-change-limited-liablity-partnership-agreement',
  templateUrl: './change-limited-liablity-partnership-agreement.component.html',
  styleUrls: ['./change-limited-liablity-partnership-agreement.component.css']
})
export class ChangeLimitedLiablityPartnershipAgreementComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
