import { Component, OnInit } from '@angular/core';
import { Header } from "./term-sheet.constant";

@Component({
  selector: 'app-term-sheet',
  templateUrl: './term-sheet.component.html',
  styleUrls: ['./term-sheet.component.css']
})
export class TermSheetComponent implements OnInit {

  serviceHeader : any;
  constructor() {
  }

ngOnInit(): void {
  this.serviceHeader = Header;
}

}
