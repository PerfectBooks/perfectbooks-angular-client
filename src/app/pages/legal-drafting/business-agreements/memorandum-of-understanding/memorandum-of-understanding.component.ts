import { Component, OnInit } from '@angular/core';
import { Header } from "./memorandum-of-understanding.constant";

@Component({
  selector: 'app-memorandum-of-understanding',
  templateUrl: './memorandum-of-understanding.component.html',
  styleUrls: ['./memorandum-of-understanding.component.css']
})
export class MemorandumOfUnderstandingComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
