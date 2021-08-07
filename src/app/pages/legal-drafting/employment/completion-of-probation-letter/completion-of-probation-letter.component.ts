import { Component, OnInit } from '@angular/core';
import { Header } from "./completion-of-probation-letter.constant";
@Component({
  selector: 'app-completion-of-probation-letter',
  templateUrl: './completion-of-probation-letter.component.html',
  styleUrls: ['./completion-of-probation-letter.component.css']
})
export class CompletionOfProbationLetterComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
