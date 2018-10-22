import { DataService } from './../core/data.service';
import { IClientTable } from './../shared/interfaces';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit {
  displayedColumns = ['firstName', 'lastName', 'phone'];
  dataSource = new MatTableDataSource<IClientTable>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSource.data = this.dataService.getMyClients();
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
