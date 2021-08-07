import { Component, OnInit } from '@angular/core';
import { Header } from "./share-holder-agreement.constant";

@Component({
  selector: 'app-share-holder-agreement',
  templateUrl: './share-holder-agreement.component.html',
  styleUrls: ['./share-holder-agreement.component.css']
})
export class ShareHolderAgreementComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
