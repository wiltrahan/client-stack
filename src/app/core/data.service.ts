import { DataSource } from '@angular/cdk/collections';
import { IClient, IClientTable } from './../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService  {

  baseUrl = 'http://localhost:8080/client_stackAPI/api/clients';

  constructor(private http: HttpClient) { }

  private myClients: IClient[] = [
    {id: 1, lastName: 'Nunes', firstName: 'Jessica', phone: '508.333.3333', email: 'missjess@ymail.com', service: 'whoknows' },
    {id: 2, lastName: 'Stein', firstName: 'Frankie', phone: '401.333.3233', email: 'frankie@bark.org', service: 'everything' },
    {id: 3, lastName: 'Trahan', firstName: 'Wil', phone: '508.777.6475', email: 'wilt@us.gov', service: 'Make it thick' },
    {id: 4, lastName: 'Dough', firstName: 'Mary', phone: '617.211.1234', email: 'marycash@gmail.com', service: 'All kinds of wild shit' }
  ];
  // private clientTable: IClientTable[] = [
  //   {id: 1, lastName: 'Nunes', firstName: 'Jessica', phone: '508.333.3333' },
  //   {id: 2, lastName: 'Stein', firstName: 'Frankie', phone: '401.333.3233' },
  //   {id: 3, lastName: 'Trahan', firstName: 'Wil', phone: '508.777.6475'  },
  //   {id: 4, lastName: 'Dough', firstName: 'Mary', phone: '617.211.1234' }
  // ];

  getClients(): Observable<IClientTable[]> {
    return this.http.get<IClientTable[]>(this.baseUrl);
  }
  getMyClient(id: number) {
    const myClient = this.myClients.find(client => client.id === id);
    return myClient;
  }
}

