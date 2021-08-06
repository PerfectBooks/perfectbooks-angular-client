import { Component, OnInit } from '@angular/core';
import {Header} from './private-limited-company-to-limited-liablity-partnership.constant';

@Component({
  selector: 'app-private-limited-company-to-limited-liablity-partnership',
  templateUrl: './private-limited-company-to-limited-liablity-partnership.component.html',
  styleUrls: ['./private-limited-company-to-limited-liablity-partnership.component.css']
})
export class PrivateLimitedCompanyToLimitedLiablityPartnershipComponent implements OnInit {

  serviceHeader : any;
     constructor() {
     }

   ngOnInit(): void {
     this.serviceHeader = Header;
   }

}
