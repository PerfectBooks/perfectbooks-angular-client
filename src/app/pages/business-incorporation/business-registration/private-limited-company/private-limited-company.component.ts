import { Component, OnInit } from '@angular/core';
import {Header} from './private-limited-company.constant';

@Component({
  selector: 'app-private-limited-company',
  templateUrl: './private-limited-company.component.html',
  styleUrls: ['./private-limited-company.component.css']
})
export class PrivateLimitedCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
