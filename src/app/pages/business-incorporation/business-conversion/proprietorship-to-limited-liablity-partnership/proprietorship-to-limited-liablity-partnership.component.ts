import { Component, OnInit } from '@angular/core';
import {Header} from './proprietorship-to-limited-liablity-partnership.constant';

@Component({
  selector: 'app-proprietorship-to-limited-liablity-partnership',
  templateUrl: './proprietorship-to-limited-liablity-partnership.component.html',
  styleUrls: ['./proprietorship-to-limited-liablity-partnership.component.css']
})
export class ProprietorshipToLimitedLiablityPartnershipComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
