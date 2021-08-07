import { Component, OnInit } from '@angular/core';
import { Header } from "./employee-termination-notice.constant";
@Component({
  selector: 'app-employee-termination-notice',
  templateUrl: './employee-termination-notice.component.html',
  styleUrls: ['./employee-termination-notice.component.css']
})
export class EmployeeTerminationNoticeComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
