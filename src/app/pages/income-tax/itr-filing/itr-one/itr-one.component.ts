import { Component, OnInit } from '@angular/core';
import { Header } from "./itr-one.constant";

@Component({
  selector: 'app-itr-one',
  templateUrl: './itr-one.component.html',
  styleUrls: ['./itr-one.component.css']
})
export class ItrOneComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
