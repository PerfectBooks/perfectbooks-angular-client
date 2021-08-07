import { Component, OnInit } from '@angular/core';
import { Header } from "./employment-agreement.constant";
@Component({
  selector: 'app-employment-agreement',
  templateUrl: './employment-agreement.component.html',
  styleUrls: ['./employment-agreement.component.css']
})
export class EmploymentAgreementComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
