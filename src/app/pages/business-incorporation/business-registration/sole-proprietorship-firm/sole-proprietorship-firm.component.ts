import { Component, OnInit } from '@angular/core';
import { Header } from './sole-proprietorship-firm.constant';

@Component({
  selector: 'app-sole-proprietorship-firm',
  templateUrl: './sole-proprietorship-firm.component.html',
  styleUrls: ['./sole-proprietorship-firm.component.css']
})
export class SoleProprietorshipFirmComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
