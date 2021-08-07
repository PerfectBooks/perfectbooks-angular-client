import { Component, OnInit } from '@angular/core';
import { Header } from "./resignation-director-resolution.constant";

@Component({
  selector: 'app-resignation-director-resolution',
  templateUrl: './resignation-director-resolution.component.html',
  styleUrls: ['./resignation-director-resolution.component.css']
})
export class ResignationDirectorResolutionComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
