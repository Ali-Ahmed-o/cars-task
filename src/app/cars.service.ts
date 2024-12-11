import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars(): Observable<any> {
    return this.http.get('https://www.freetestapi.com/api/v1/cars?limit=4');
    
  }
}
