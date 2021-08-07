import { Component, OnInit } from '@angular/core';
import { Header } from "./adding-director-resolution.constant";

@Component({
  selector: 'app-adding-director-resolution',
  templateUrl: './adding-director-resolution.component.html',
  styleUrls: ['./adding-director-resolution.component.css']
})
export class AddingDirectorResolutionComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
