import { Component, OnInit } from '@angular/core';
import { Header} from './account-opening-resolution.constant';

@Component({
  selector: 'app-account-opening-resolution',
  templateUrl: './account-opening-resolution.component.html',
  styleUrls: ['./account-opening-resolution.component.css']
})
export class AccountOpeningResolutionComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
