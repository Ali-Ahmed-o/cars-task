import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  cars: any[] = [];
  constructor(private _carsService: CarsService) {
    _carsService.getCars;
  }

  getcarsData() {
    this._carsService.getCars().subscribe((carsdata) => {
      this.cars = carsdata;
    });
  }
  ngOnInit(): void {
    this.getcarsData();
  }
}
