import { DataService } from './../core/data.service';
import { IClientTable } from './../shared/interfaces';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit, AfterViewInit {
  displayedColumns = ['firstName', 'lastName', 'phone'];
  dataSource = new MatTableDataSource<IClientTable>();

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSource.data = this.dataService.getMyClients();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
