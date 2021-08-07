import { Component, OnInit } from '@angular/core';
import { Header } from "./file-dir-three-kyc.constant";
@Component({
  selector: 'app-file-dir-three-kyc',
  templateUrl: './file-dir-three-kyc.component.html',
  styleUrls: ['./file-dir-three-kyc.component.css']
})
export class FileDirThreeKycComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
