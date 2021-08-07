import { Component, OnInit } from '@angular/core';
import { Header } from "./power-of-attorney.constant";
@Component({
  selector: 'app-power-of-attorney',
  templateUrl: './power-of-attorney.component.html',
  styleUrls: ['./power-of-attorney.component.css']
})
export class PowerOfAttorneyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
