import { Component, OnInit } from '@angular/core';
import { Header } from "./increase-authorised-share-capital.constant";
@Component({
  selector: 'app-increase-authorised-share-capital',
  templateUrl: './increase-authorised-share-capital.component.html',
  styleUrls: ['./increase-authorised-share-capital.component.css']
})
export class IncreaseAuthorisedShareCapitalComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
