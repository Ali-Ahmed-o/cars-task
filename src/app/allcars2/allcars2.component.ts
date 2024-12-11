import { Component, OnInit } from '@angular/core';
import { Alldatacars2Service } from '../service/alldatacars2.service';

@Component({
  selector: 'app-allcars2',
  templateUrl: './allcars2.component.html',
  styleUrls: ['./allcars2.component.css']         //Allcars2Component
})
export class Allcars2Component implements OnInit {

  cars: any[]= [];
  constructor( private _Alldatacars2Service: Alldatacars2Service) {
    _Alldatacars2Service.getCars;
  }

  getcarsData2() {
    this._Alldatacars2Service.getCars().subscribe((carsdata2)=> {
      this.cars = carsdata2;
    });
    }
  ngOnInit(): void {
    this.getcarsData2();
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