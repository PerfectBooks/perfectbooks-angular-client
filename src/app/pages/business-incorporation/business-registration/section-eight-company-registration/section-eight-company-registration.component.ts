import { Component, OnInit } from '@angular/core';
import { Header } from './section-eight-company-registration.constant';

@Component({
  selector: 'app-section-eight-company-registration',
  templateUrl: './section-eight-company-registration.component.html',
  styleUrls: ['./section-eight-company-registration.component.css']
})
export class SectionEightCompanyRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
