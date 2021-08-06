import { Component, OnInit } from '@angular/core';
import { Header } from './private-company-to-public-company.constant';

@Component({
  selector: 'app-private-company-to-public-company',
  templateUrl: './private-company-to-public-company.component.html',
  styleUrls: ['./private-company-to-public-company.component.css']
})
export class PrivateCompanyToPublicCompanyComponent implements OnInit {

  serviceHeader : any;
     constructor() {
     }

   ngOnInit(): void {
     this.serviceHeader = Header;
   }

}
