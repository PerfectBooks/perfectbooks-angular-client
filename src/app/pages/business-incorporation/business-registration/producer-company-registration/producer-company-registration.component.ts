import { Component, OnInit } from '@angular/core';
import { Header } from './producer-company-registration.constant'

@Component({
  selector: 'app-producer-company-registration',
  templateUrl: './producer-company-registration.component.html',
  styleUrls: ['./producer-company-registration.component.css']
})
export class ProducerCompanyRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
