import { Component, OnInit } from '@angular/core';
import { Header } from "./commercial-lease-deed.constant";
@Component({
  selector: 'app-commercial-lease-deed',
  templateUrl: './commercial-lease-deed.component.html',
  styleUrls: ['./commercial-lease-deed.component.css']
})
export class CommercialLeaseDeedComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
