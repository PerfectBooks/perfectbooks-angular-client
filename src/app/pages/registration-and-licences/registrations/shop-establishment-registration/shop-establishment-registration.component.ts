import { Component, OnInit } from '@angular/core';
import { Header } from "./shop-establishment-registration.constant";
@Component({
  selector: 'app-shop-establishment-registration',
  templateUrl: './shop-establishment-registration.component.html',
  styleUrls: ['./shop-establishment-registration.component.css']
})
export class ShopEstablishmentRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
