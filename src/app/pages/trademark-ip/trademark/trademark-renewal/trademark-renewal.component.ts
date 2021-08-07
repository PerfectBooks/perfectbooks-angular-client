import { Component, OnInit } from '@angular/core';
import { Header } from "./trademark-renewal.constant";
@Component({
  selector: 'app-trademark-renewal',
  templateUrl: './trademark-renewal.component.html',
  styleUrls: ['./trademark-renewal.component.css']
})
export class TrademarkRenewalComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
