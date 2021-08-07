import { Component, OnInit } from '@angular/core';
import { Header } from "./import-export-code-registration.constant";
@Component({
  selector: 'app-import-export-code-registration',
  templateUrl: './import-export-code-registration.component.html',
  styleUrls: ['./import-export-code-registration.component.css']
})
export class ImportExportCodeRegistrationComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
