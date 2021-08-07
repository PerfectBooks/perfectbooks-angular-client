import { Component, OnInit } from '@angular/core';
import { Header } from "./relieving-letter.constant";
@Component({
  selector: 'app-relieving-letter',
  templateUrl: './relieving-letter.component.html',
  styleUrls: ['./relieving-letter.component.css']
})
export class RelievingLetterComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
