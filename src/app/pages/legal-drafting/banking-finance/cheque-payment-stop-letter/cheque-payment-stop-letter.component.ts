import { Component, OnInit } from '@angular/core';
import { Header } from "./cheque-payment-stop-letter.constant";
@Component({
  selector: 'app-cheque-payment-stop-letter',
  templateUrl: './cheque-payment-stop-letter.component.html',
  styleUrls: ['./cheque-payment-stop-letter.component.css']
})
export class ChequePaymentStopLetterComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
