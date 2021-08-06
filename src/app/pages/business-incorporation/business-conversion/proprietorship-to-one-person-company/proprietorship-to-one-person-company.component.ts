import { Component, OnInit } from '@angular/core';
import { Header } from "./proprietorship-to-one-person-company.constant";

@Component({
  selector: 'app-proprietorship-to-one-person-company',
  templateUrl: './proprietorship-to-one-person-company.component.html',
  styleUrls: ['./proprietorship-to-one-person-company.component.css']
})
export class ProprietorshipToOnePersonCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
