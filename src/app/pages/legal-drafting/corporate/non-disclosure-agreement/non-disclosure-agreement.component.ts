import { Component, OnInit } from '@angular/core';
import { Header } from "./non-disclosure-agreement.constant";
@Component({
  selector: 'app-non-disclosure-agreement',
  templateUrl: './non-disclosure-agreement.component.html',
  styleUrls: ['./non-disclosure-agreement.component.css']
})
export class NonDisclosureAgreementComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
