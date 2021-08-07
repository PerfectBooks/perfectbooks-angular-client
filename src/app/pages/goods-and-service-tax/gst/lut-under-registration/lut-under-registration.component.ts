import { Component, OnInit } from '@angular/core';
import { Header } from "./lut-under-registration.constant";
@Component({
  selector: 'app-lut-under-registration',
  templateUrl: './lut-under-registration.component.html',
  styleUrls: ['./lut-under-registration.component.css']
})
export class LutUnderRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
