import { Component, OnInit } from '@angular/core';
import { Header } from "./fssai-registration.constant";
@Component({
  selector: 'app-fssai-registration',
  templateUrl: './fssai-registration.component.html',
  styleUrls: ['./fssai-registration.component.css']
})
export class FssaiRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
