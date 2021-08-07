import { Component, OnInit } from '@angular/core';
import { Header } from "./termination-of-agreement.constant";
@Component({
  selector: 'app-termination-of-agreement',
  templateUrl: './termination-of-agreement.component.html',
  styleUrls: ['./termination-of-agreement.component.css']
})
export class TerminationOfAgreementComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
