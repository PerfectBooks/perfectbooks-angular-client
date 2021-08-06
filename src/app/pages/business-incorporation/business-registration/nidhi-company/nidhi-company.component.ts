import { Component, OnInit } from '@angular/core';
import { Header } from './nidhi-company.constant';

@Component({
  selector: 'app-nidhi-company',
  templateUrl: './nidhi-company.component.html',
  styleUrls: ['./nidhi-company.component.css']
})
export class NidhiCompanyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }
}
