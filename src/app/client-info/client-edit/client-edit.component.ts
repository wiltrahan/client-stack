import { IClient } from './../../shared/interfaces';
import { Location } from '@angular/common';
import { DataService } from './../../core/data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  client: IClient;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getMyClient(id)
      .subscribe(client => this.client = client);
  }

  goBack(): void {
    this.location.back();
  }

  editClient(): void {
    this.dataService.updateClient(this.client)
      .subscribe(
        data => {
          alert('Update successful for ' + data.firstName + ' ' + data.lastName);
        }
      );
  }

  deleteClient(): void {
    this.dataService.deleteClient(this.client.id).subscribe();
    alert(this.client.firstName + ' ' + this.client.lastName + ' has been deleted.');
    console.log('Delete Successful ' + this.client.id);
  }
}
