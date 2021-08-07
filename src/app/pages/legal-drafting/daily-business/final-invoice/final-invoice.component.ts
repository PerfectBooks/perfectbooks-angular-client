import { Component, OnInit } from '@angular/core';
import { Header } from "./final-invoice.constant";

@Component({
  selector: 'app-final-invoice',
  templateUrl: './final-invoice.component.html',
  styleUrls: ['./final-invoice.component.css']
})
export class FinalInvoiceComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
