import { Component, OnInit } from '@angular/core';
import { Header } from "./promissory-note.constant";

@Component({
  selector: 'app-promissory-note',
  templateUrl: './promissory-note.component.html',
  styleUrls: ['./promissory-note.component.css']
})
export class PromissoryNoteComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
