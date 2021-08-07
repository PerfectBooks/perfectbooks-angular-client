import { Component, OnInit } from '@angular/core';
import { Header } from "./trademark-objection-reply.constant";
@Component({
  selector: 'app-trademark-objection-reply',
  templateUrl: './trademark-objection-reply.component.html',
  styleUrls: ['./trademark-objection-reply.component.css']
})
export class TrademarkObjectionReplyComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }


}
