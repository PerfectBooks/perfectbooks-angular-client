import { Component, OnInit } from '@angular/core';
import { Header } from "./trademark-assignment.constant";
@Component({
  selector: 'app-trademark-assignment',
  templateUrl: './trademark-assignment.component.html',
  styleUrls: ['./trademark-assignment.component.css']
})
export class TrademarkAssignmentComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
