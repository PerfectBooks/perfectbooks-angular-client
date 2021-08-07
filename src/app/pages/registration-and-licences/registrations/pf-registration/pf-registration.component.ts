import { Component, OnInit } from '@angular/core';
import { Header } from "./pf-registration.constant";
@Component({
  selector: 'app-pf-registration',
  templateUrl: './pf-registration.component.html',
  styleUrls: ['./pf-registration.component.css']
})
export class PfRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
