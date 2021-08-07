import { Component, OnInit } from '@angular/core';
import { Header } from "./gst-annual-filing.constant";
@Component({
  selector: 'app-gst-annual-filing',
  templateUrl: './gst-annual-filing.component.html',
  styleUrls: ['./gst-annual-filing.component.css']
})
export class GstAnnualFilingComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
