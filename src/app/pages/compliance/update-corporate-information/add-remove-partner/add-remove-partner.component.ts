import { Component, OnInit } from '@angular/core';
import { Header } from "./add-remove-partner.constant";

@Component({
  selector: 'app-add-remove-partner',
  templateUrl: './add-remove-partner.component.html',
  styleUrls: ['./add-remove-partner.component.css']
})
export class AddRemovePartnerComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
