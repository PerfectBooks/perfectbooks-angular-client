import { Component, OnInit } from '@angular/core';
import { Header } from "./website-disclaimer-policy.constant";

@Component({
  selector: 'app-website-disclaimer-policy',
  templateUrl: './website-disclaimer-policy.component.html',
  styleUrls: ['./website-disclaimer-policy.component.css']
})
export class WebsiteDisclaimerPolicyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
