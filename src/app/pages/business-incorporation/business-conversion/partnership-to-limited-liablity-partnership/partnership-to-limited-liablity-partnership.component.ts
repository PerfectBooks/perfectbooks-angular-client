import { Component, OnInit } from '@angular/core';
import {Header} from './partnership-to-limited-liablity-partnership.constant';

@Component({
  selector: 'app-partnership-to-limited-liablity-partnership',
  templateUrl: './partnership-to-limited-liablity-partnership.component.html',
  styleUrls: ['./partnership-to-limited-liablity-partnership.component.css']
})
export class PartnershipToLimitedLiablityPartnershipComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
