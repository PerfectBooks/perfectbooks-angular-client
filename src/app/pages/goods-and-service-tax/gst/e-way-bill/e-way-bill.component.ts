import { Component, OnInit } from '@angular/core';
import { Header } from "./e-way-bill.constant";
@Component({
  selector: 'app-e-way-bill',
  templateUrl: './e-way-bill.component.html',
  styleUrls: ['./e-way-bill.component.css']
})
export class EWayBillComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
