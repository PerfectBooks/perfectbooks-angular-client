import { Component, OnInit } from '@angular/core';
import { Header } from "./cancellation-of-gst.constant";
@Component({
  selector: 'app-cancellation-of-gst',
  templateUrl: './cancellation-of-gst.component.html',
  styleUrls: ['./cancellation-of-gst.component.css']
})
export class CancellationOfGstComponent implements OnInit {

  serviceHeader : any;
    constructor() {
    }

  ngOnInit(): void {
    this.serviceHeader = Header;
  }

}
