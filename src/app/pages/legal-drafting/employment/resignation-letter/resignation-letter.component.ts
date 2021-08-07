import { Component, OnInit } from '@angular/core';
import { Header } from "./resignation-letter.constant";
@Component({
  selector: 'app-resignation-letter',
  templateUrl: './resignation-letter.component.html',
  styleUrls: ['./resignation-letter.component.css']
})
export class ResignationLetterComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
