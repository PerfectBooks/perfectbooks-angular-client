import { Component, OnInit } from '@angular/core';
import { Header } from "./close-private-limited-company.constant";
@Component({
  selector: 'app-close-private-limited-company',
  templateUrl: './close-private-limited-company.component.html',
  styleUrls: ['./close-private-limited-company.component.css']
})
export class ClosePrivateLimitedCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
