import { Component, OnInit } from '@angular/core';
import { Header } from "./trademark-opposition.constant";
@Component({
  selector: 'app-trademark-opposition',
  templateUrl: './trademark-opposition.component.html',
  styleUrls: ['./trademark-opposition.component.css']
})
export class TrademarkOppositionComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
