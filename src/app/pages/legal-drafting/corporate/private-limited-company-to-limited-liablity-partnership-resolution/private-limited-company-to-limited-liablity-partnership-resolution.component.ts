import { Component, OnInit } from '@angular/core';
import { Header } from "./private-limited-company-to-limited-liablity-partnership-resolution.constant";

@Component({
  selector: 'app-private-limited-company-to-limited-liablity-partnership-resolution',
  templateUrl: './private-limited-company-to-limited-liablity-partnership-resolution.component.html',
  styleUrls: ['./private-limited-company-to-limited-liablity-partnership-resolution.component.css']
})
export class PrivateLimitedCompanyToLimitedLiablityPartnershipResolutionComponent implements OnInit {

  serviceHeader : any;
  constructor() {
  }

ngOnInit(): void {
  this.serviceHeader = Header;
}

}
