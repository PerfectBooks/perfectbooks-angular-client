import { Component, OnInit } from '@angular/core';
import { Header } from "./add-remove-director.constant";

@Component({
  selector: 'app-add-remove-director',
  templateUrl: './add-remove-director.component.html',
  styleUrls: ['./add-remove-director.component.css']
})
export class AddRemoveDirectorComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
