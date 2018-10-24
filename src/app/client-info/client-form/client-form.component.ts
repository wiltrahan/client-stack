import { DataService } from './../../core/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(form: NgForm) {
    this.dataService.addClient(form.value)
      .subscribe(data => {
        alert('New Client ' + data.firstName + ' ' + data.lastName);
      });
      this.goBack();
  }
}
