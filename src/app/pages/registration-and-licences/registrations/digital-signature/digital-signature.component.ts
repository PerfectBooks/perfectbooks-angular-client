import { Component, OnInit } from '@angular/core';
import { Header } from "./digital-signature.constant";
@Component({
  selector: 'app-digital-signature',
  templateUrl: './digital-signature.component.html',
  styleUrls: ['./digital-signature.component.css']
})
export class DigitalSignatureComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
