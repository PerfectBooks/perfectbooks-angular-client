import { Component, OnInit } from '@angular/core';
import { Header } from "./gst-registration.constant";
@Component({
  selector: 'app-gst-registration',
  templateUrl: './gst-registration.component.html',
  styleUrls: ['./gst-registration.component.css']
})
export class GstRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
