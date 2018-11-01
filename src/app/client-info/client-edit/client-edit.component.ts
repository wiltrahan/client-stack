import { IClient } from './../../shared/interfaces';
import { DataService } from './../../core/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClientModalComponent } from './../client-modal/client-modal.component';

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
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getClient();
  }

  getClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getMyClient(id)
      .subscribe(client => this.client = client);
  }

  goBack(id: number): void {
    this.router.navigateByUrl('client-info/' + id);
  }

  editClient(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.updateClient(this.client)
      .subscribe(
        data => {
          alert('Update successful for ' + data.firstName + ' ' + data.lastName);
          this.goBack(id);
        }
      );
  }

  deleteClient(): void {
    this.dataService.deleteClient(this.client.id).subscribe();
    this.onSuccess(this.client);
  }

  onSuccess(client: IClient) {
    this.dialog.open(ClientModalComponent, {
      data: {
        title: 'Deleted',
        subtitle: 'deleted from',
        firstName: client.firstName,
        lastName: client.lastName
      }
    });
    this.router.navigateByUrl('/');
  }
}
