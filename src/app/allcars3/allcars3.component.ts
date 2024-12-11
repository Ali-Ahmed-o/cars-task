import { Component, OnInit } from '@angular/core';
import { Alldatacars3Service } from '../service/alldatacars3.service';

@Component({
  selector: 'app-allcars3',
  templateUrl: './allcars3.component.html',
  styleUrls: ['./allcars3.component.css']        ///Allcars3Component
})
export class Allcars3Component implements OnInit {

  cars: any[]= [];
  constructor( private _Alldatacars3Service: Alldatacars3Service) {
    _Alldatacars3Service.getCars;
  }

  getcarsData3() {
    this._Alldatacars3Service.getCars().subscribe((carsdata3)=> {
      this.cars = carsdata3;
    });
    }
  ngOnInit(): void {
    this.getcarsData3();
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