import { Component, OnInit } from '@angular/core';
import { Header } from "./proprietorship-to-partnership.constant";
@Component({
  selector: 'app-proprietorship-to-partnership',
  templateUrl: './proprietorship-to-partnership.component.html',
  styleUrls: ['./proprietorship-to-partnership.component.css']
})
export class ProprietorshipToPartnershipComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
