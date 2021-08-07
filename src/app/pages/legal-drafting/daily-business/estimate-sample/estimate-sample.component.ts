import { Component, OnInit } from '@angular/core';
import { Header } from "./estimate-sample.constant";

@Component({
  selector: 'app-estimate-sample',
  templateUrl: './estimate-sample.component.html',
  styleUrls: ['./estimate-sample.component.css']
})
export class EstimateSampleComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
