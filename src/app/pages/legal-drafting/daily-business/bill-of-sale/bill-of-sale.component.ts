import { Component, OnInit } from '@angular/core';
import { Header } from "./bill-of-sale.constant";

@Component({
  selector: 'app-bill-of-sale',
  templateUrl: './bill-of-sale.component.html',
  styleUrls: ['./bill-of-sale.component.css']
})
export class BillOfSaleComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
