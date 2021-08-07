import { Component, OnInit } from '@angular/core';
import { Header } from "./accounting-and-bookkeeping.constant";

@Component({
  selector: 'app-accounting-and-bookkeeping',
  templateUrl: './accounting-and-bookkeeping.component.html',
  styleUrls: ['./accounting-and-bookkeeping.component.css']
})
export class AccountingAndBookkeepingComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
