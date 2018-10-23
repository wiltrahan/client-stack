import { IClient } from './../shared/interfaces';
import { DataService } from './../core/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  client: IClient;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getClient();
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getMyClient(id)
      .subscribe(client => this.client = client);
  }
}
