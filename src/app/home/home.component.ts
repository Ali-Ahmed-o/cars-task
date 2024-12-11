import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], //HomeComponent
})
export class HomeComponent implements OnInit {
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

  scrollToTop() {
    (function smoothscroll() {
      var currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 1);
      }
    })();
  }
  
}
