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
          start: new Date(event.nextAppt),
          title: event.firstName + ' ' + event.lastName
        }));
      });
      return this.events;
  }

  parseTime(timeString): any {
    if (timeString === '') { return null; }

    const time = timeString.match(/(\d+)(:(\d\d))?\s*(p?)/i);
    if (time == null) { return null; }
    let hours = parseInt(time[1], 10);

    if (hours === 12 && !time[4]) {
        hours = 0;
    } else {
      hours += (hours < 12 && time[4]) ? 12 : 0;
    }
    const d = new Date();
    d.setHours(hours);
    d.setMinutes(parseInt(time[3], 10) || 0);
    d.setSeconds(0, 0);
    // console.log(d.getDate());
    return d;
  }
}
