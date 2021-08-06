import { Component, OnInit } from '@angular/core';
import {Header} from './limited-liability-partnership.constant';
@Component({
  selector: 'app-limited-liability-partnership',
  templateUrl: './limited-liability-partnership.component.html',
  styleUrls: ['./limited-liability-partnership.component.css']
})
export class LimitedLiabilityPartnershipComponent implements OnInit {
  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
