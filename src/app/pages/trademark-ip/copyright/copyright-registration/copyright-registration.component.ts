import { Component, OnInit } from '@angular/core';
import { Header } from "./copyright-registration.constant";
@Component({
  selector: 'app-copyright-registration',
  templateUrl: './copyright-registration.component.html',
  styleUrls: ['./copyright-registration.component.css']
})
export class CopyrightRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
