export interface IClient {
  id: number;
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  service: string;
}

export interface IClientTable {
  id: number;
  lastName: string;
  firstName: string;
  phone: string;
}

export interface IClientCalendar {
  id: number;
  lastName: string;
  firstName: string;
  nextAppt: Date;
  startTime: string;
  endTime: string;
}
