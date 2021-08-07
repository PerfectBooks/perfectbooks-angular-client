import { Component, OnInit } from '@angular/core';
import { Header } from "./ssi-msme-registration.constant";
@Component({
  selector: 'app-ssi-msme-registration',
  templateUrl: './ssi-msme-registration.component.html',
  styleUrls: ['./ssi-msme-registration.component.css']
})
export class SsiMsmeRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
