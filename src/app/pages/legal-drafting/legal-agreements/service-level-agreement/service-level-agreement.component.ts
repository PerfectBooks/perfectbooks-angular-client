import { Component, OnInit } from '@angular/core';
import { Header } from "./service-level-agreement.constant";
@Component({
  selector: 'app-service-level-agreement',
  templateUrl: './service-level-agreement.component.html',
  styleUrls: ['./service-level-agreement.component.css']
})
export class ServiceLevelAgreementComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
