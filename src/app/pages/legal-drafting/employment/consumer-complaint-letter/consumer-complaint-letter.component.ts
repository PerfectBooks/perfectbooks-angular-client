import { Component, OnInit } from '@angular/core';
import { Header } from "./consumer-complaint-letter.constant";
@Component({
  selector: 'app-consumer-complaint-letter',
  templateUrl: './consumer-complaint-letter.component.html',
  styleUrls: ['./consumer-complaint-letter.component.css']
})
export class ConsumerComplaintLetterComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
