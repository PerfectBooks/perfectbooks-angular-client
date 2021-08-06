import { Component, OnInit } from '@angular/core';
import { Header } from './partnership-firm.constant';
@Component({
  selector: 'app-partnership-firm',
  templateUrl: './partnership-firm.component.html',
  styleUrls: ['./partnership-firm.component.css']
})
export class PartnershipFirmComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
