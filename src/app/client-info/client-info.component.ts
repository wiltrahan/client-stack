import { IClient } from './../shared/interfaces';
import { DataService } from './../core/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  // clients: IClient[] = [];
  client: IClient;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.client = this.dataService.getMyClient(1);
  }

}
