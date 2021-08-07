import { Component, OnInit } from '@angular/core';
import { Header } from "./right-to-information.constant";
@Component({
  selector: 'app-right-to-information',
  templateUrl: './right-to-information.component.html',
  styleUrls: ['./right-to-information.component.css']
})
export class RightToInformationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
