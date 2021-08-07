import { Component, OnInit } from '@angular/core';
import { Header } from "./permanent-patent.constant";

@Component({
  selector: 'app-permanent-patent',
  templateUrl: './permanent-patent.component.html',
  styleUrls: ['./permanent-patent.component.css']
})
export class PermanentPatentComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
