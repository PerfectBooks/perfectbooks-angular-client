import { Component, OnInit } from '@angular/core';
import { Header } from "./dissolve-partnership-firm.constant";
@Component({
  selector: 'app-dissolve-partnership-firm',
  templateUrl: './dissolve-partnership-firm.component.html',
  styleUrls: ['./dissolve-partnership-firm.component.css']
})
export class DissolvePartnershipFirmComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
