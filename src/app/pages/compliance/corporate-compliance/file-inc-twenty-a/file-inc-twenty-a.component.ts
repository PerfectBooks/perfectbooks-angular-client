import { Component, OnInit } from '@angular/core';
import { Header } from "./file-inc-twenty-a.constant";
@Component({
  selector: 'app-file-inc-twenty-a',
  templateUrl: './file-inc-twenty-a.component.html',
  styleUrls: ['./file-inc-twenty-a.component.css']
})
export class FileIncTwentyAComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
