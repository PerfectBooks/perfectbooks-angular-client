import { Component, OnInit } from '@angular/core';
import { Header } from "./cheque-dishonor-notice-section-one-three-eight.constant";
@Component({
  selector: 'app-cheque-dishonor-notice-section-one-three-eight',
  templateUrl: './cheque-dishonor-notice-section-one-three-eight.component.html',
  styleUrls: ['./cheque-dishonor-notice-section-one-three-eight.component.css']
})
export class ChequeDishonorNoticeSectionOneThreeEightComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
