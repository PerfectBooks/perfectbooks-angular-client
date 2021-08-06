import { Component, OnInit } from '@angular/core';
import { Header } from "./proprietorship-to-private-limited-company.constant";
@Component({
  selector: 'app-proprietorship-to-private-limited-company',
  templateUrl: './proprietorship-to-private-limited-company.component.html',
  styleUrls: ['./proprietorship-to-private-limited-company.component.css']
})
export class ProprietorshipToPrivateLimitedCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
