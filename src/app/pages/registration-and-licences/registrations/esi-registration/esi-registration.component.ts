import { Component, OnInit } from '@angular/core';
import { Header } from "./esi-registration.constant";
@Component({
  selector: 'app-esi-registration',
  templateUrl: './esi-registration.component.html',
  styleUrls: ['./esi-registration.component.css']
})
export class EsiRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
