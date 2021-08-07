import { Component, OnInit } from '@angular/core';
import { Header } from "./trademark-registration.constant";
@Component({
  selector: 'app-trademark-registration',
  templateUrl: './trademark-registration.component.html',
  styleUrls: ['./trademark-registration.component.css']
})
export class TrademarkRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
