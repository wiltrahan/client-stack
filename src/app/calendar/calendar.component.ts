import { IClient } from './../shared/interfaces';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  clients: IClient[];
  constructor(private dataService: DataService) { }

  view = 'month';
  viewDate: Date = new Date();
  testData = {
    start: new Date('2018-10-29 09:00:00'),
    end: new Date('2018-10-29 10:00:00'),
    title: 'Wil Trahan'
  };
  events: CalendarEvent[] = this.getClients();

  ngOnInit() {
    this.getClients();
  }

  getClients(): CalendarEvent[] {
    this.dataService.getClients()
    .subscribe(clients => {
        this.clients = clients;
        this.events = this.clients.map(event => ({ start: event.nextAppt, title: event.firstName + ' ' + event.lastName}));
        this.events.forEach(function(title) {
          console.log(title);
        });
      });
      return this.events;

  }

  // mapClientsToCalendar(clients: IClient[]): CalendarEvent[] {
  //   this.events.map(val => <CalendarEvent[]> {
  //     start: val.startTime,
  //     title: val.lastName
  //   });
  //   return this.events;

  // }
  // array.map(val => <IKeys>{
  //   key1: val.key1,
  //   key2: val.key2
  // });
}
