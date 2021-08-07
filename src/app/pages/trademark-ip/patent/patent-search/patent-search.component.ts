import { Component, OnInit } from '@angular/core';
import { Header } from "./patent-search.constant";
@Component({
  selector: 'app-patent-search',
  templateUrl: './patent-search.component.html',
  styleUrls: ['./patent-search.component.css']
})
export class PatentSearchComponent implements OnInit {

  serviceHeader : any;
  constructor() {
  }

ngOnInit(): void {
  this.serviceHeader = Header;
}
}
