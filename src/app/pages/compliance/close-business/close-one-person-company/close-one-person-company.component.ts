import { Component, OnInit } from '@angular/core';
import { Header } from "./close-one-person-company.constant";

@Component({
  selector: 'app-close-one-person-company',
  templateUrl: './close-one-person-company.component.html',
  styleUrls: ['./close-one-person-company.component.css']
})
export class CloseOnePersonCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
