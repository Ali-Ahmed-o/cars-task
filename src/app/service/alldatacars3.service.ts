import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'            //AlldatacarsService
})
export class Alldatacars3Service {
  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    return this.http.get('https://www.freetestapi.com/api/v1/cars?limit=20');
    
  }
}