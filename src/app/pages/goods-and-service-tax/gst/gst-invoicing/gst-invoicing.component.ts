import { Component, OnInit } from '@angular/core';
import { Header } from "./gst-invoicing.constant";
@Component({
  selector: 'app-gst-invoicing',
  templateUrl: './gst-invoicing.component.html',
  styleUrls: ['./gst-invoicing.component.css']
})
export class GstInvoicingComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
