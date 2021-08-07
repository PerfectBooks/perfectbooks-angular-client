import { Component, OnInit } from '@angular/core';
import { Header } from "./appointment-letter.constant";
@Component({
  selector: 'app-appointment-letter',
  templateUrl: './appointment-letter.component.html',
  styleUrls: ['./appointment-letter.component.css']
})
export class AppointmentLetterComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
