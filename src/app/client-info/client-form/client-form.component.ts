import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
