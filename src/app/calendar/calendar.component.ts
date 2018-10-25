import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  view = 'month';
  viewDate: Date = new Date();
  testData = {
    start: new Date('2018-10-29 09:00:00'),
    end: new Date('2018-10-29 10:00:00'),
    title: 'Wil Trahan'
  };
  events: CalendarEvent[] = [this.testData];

}

