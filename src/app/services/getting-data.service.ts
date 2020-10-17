import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMission }  from '../models/IMission';


@Injectable({
  providedIn: 'root'
})
export class GettingDataService {
private mocDataUrl = 'http://localhost:3000/missions'; 
  constructor(private http: HttpClient) { }

  getMocData() {
    return this.http.get<IMission[]>(this.mocDataUrl);
  }
}
