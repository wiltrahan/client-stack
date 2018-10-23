import { DataSource } from '@angular/cdk/collections';
import { IClient, IClientTable } from './../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class DataService  {

  baseUrl = 'http://localhost:8080/client_stackAPI/api/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<IClientTable[]> {
    return this.http.get<IClientTable[]>(this.baseUrl);
  }
  getMyClient(id: number): Observable<IClient> {
    return this.http.get<IClient>(this.baseUrl + '/' + id);
  }
}

