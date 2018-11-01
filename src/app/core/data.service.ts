import { IClient } from './../shared/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({ providedIn: 'root' })
export class DataService  {

  baseUrl = 'http://localhost:8080/client_stackAPI/api/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<IClient[]> {
    return this.http.get<IClient[]>(this.baseUrl);
  }

  getMyClient(id: number): Observable<IClient> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<IClient>(url);
  }

  updateClient(client: IClient): Observable<any> {
    return this.http.put(this.baseUrl, client, httpOptions);
  }

  addClient(client: IClient): Observable<any> {
    return this.http.post<IClient>(this.baseUrl, client, httpOptions);
  }

  deleteClient(id: number): Observable<IClient> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<IClient>(url, httpOptions);
  }

}

