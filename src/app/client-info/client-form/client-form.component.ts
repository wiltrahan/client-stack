import { ClientModuleComponent } from './../client-module/client-module.component';
import { DataService } from './../../core/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router,
    private dialog: MatDialog
  ) { }


  ngOnInit() {
  }

  goBack(): void {
    this.router.navigateByUrl('/');
  }

  onSubmit(form: NgForm) {
    this.dataService.addClient(form.value)
      .subscribe(data => {
        // alert('New Client ' + data.firstName + ' ' + data.lastName);
        this.onSuccess();
      });
  }

  onSuccess() {
    this.dialog.open(ClientModuleComponent);
    this.goBack();
  }
}
