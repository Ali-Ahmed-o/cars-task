import { Component, OnInit } from '@angular/core';
import { AlldatacarsService } from '../service/alldatacars.service';

@Component({
  selector: 'app-allcars',
  templateUrl: './allcars.component.html',
  styleUrls: ['./allcars.component.css']     
})
export class AllcarsComponent implements OnInit {

  cars: any[]= [];
  constructor( private _AlldatacarsService: AlldatacarsService) {
    _AlldatacarsService.getCars;
  }

  getcarsData() {
    this._AlldatacarsService.getCars().subscribe((carsdata)=> {
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
