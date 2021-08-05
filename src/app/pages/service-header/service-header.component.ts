import { Component, Input ,OnInit } from '@angular/core';
import { ServiceHeader} from '../../models/serviceheader.model';

@Component({
  selector: 'app-service-header',
  templateUrl: './service-header.component.html',
  styleUrls: ['./service-header.component.css']
})
export class ServiceHeaderComponent implements OnInit {
  @Input() serviceHeader : any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
