import { IClient } from './../shared/interfaces';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { DataService } from '../core/data.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  clients: IClient[];
  constructor(private dataService: DataService) { }

  view = 'month';
  viewDate: Date = new Date();
  events: CalendarEvent[] = this.getClients();

  getClients(): CalendarEvent[] {
    this.dataService.getClients()
    .subscribe(clients => {
        this.clients = clients;
        this.events = this.clients.map(event => ({
          id: event.id,
          start: this.setDateTime(new Date(event.nextAppt), event.startTime),
          title: event.firstName + ' ' + event.lastName
        }));
      });

      return this.events;
  }

  setDateTime(date, time): Date {
    time = time + ' ';
    const index = time.indexOf(':');
    const index2 = time.indexOf(' ');

    const hours = time.substring(0, index);
    const minutes = time.substring(index + 1, index2);

    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds('00');
    return date;
  }
}
