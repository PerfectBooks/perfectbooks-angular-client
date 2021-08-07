import { Component, OnInit } from '@angular/core';
import { Header } from "./file-inc-twenty-two-a.constant";
@Component({
  selector: 'app-file-inc-twenty-two-a',
  templateUrl: './file-inc-twenty-two-a.component.html',
  styleUrls: ['./file-inc-twenty-two-a.component.css']
})
export class FileIncTwentyTwoAComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
