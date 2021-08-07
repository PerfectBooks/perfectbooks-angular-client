import { Component, OnInit } from '@angular/core';
import { Header } from "./pan-application.constant";
@Component({
  selector: 'app-pan-application',
  templateUrl: './pan-application.component.html',
  styleUrls: ['./pan-application.component.css']
})
export class PanApplicationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
