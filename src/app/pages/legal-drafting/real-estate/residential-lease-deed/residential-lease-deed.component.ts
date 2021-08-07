import { Component, OnInit } from '@angular/core';
import { Header } from "./residential-lease-deed.constant";
@Component({
  selector: 'app-residential-lease-deed',
  templateUrl: './residential-lease-deed.component.html',
  styleUrls: ['./residential-lease-deed.component.css']
})
export class ResidentialLeaseDeedComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
