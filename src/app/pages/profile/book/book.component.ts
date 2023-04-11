import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookingService} from "../../../shared/service/booking/booking.service";
import {Booking} from "../../../shared/model/booking";
import {Myinterval} from "../../../shared/model/myinterval";
import {Time} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    startTime: new FormControl(''),
    hours: new FormControl(''),
    alley1: new FormControl(''),
    alley2: new FormControl(''),
    alley3: new FormControl(''),
    alley4: new FormControl('')
  });


  constructor(private bookingService: BookingService, private router:Router) { }

  ngOnInit(): void {
  }

  submit(){
    let hours = this.bookForm.controls['hours'].value;
    console.log(hours);
    let interval = new Myinterval();
    let str = this.bookForm.controls['startTime'].value;
    let h = "";
    let m = "";
    let mins = false;
    for(let c of str){
      if(c === ':'){
        mins = true;
        continue;
      }
      if(!mins){
        h += c;
      } else {
        m += c;
      }
    }
    interval.start.hours = +h;
    interval.start.minutes = +m;
    console.log(interval.start);
    if(interval.start.hours <= 8) return;
    if(interval.start.hours + this.bookForm.controls['hours'].value >= 23) return;
    interval.end.hours = interval.start.hours + hours + 1;
    interval.end.minutes = 0;
    console.log(interval.end);
    if(this.bookForm.controls['alley1'].value){
      let booking = new Booking();
      booking.date = new Date().getTime();
      booking.alley = 1;
      booking.interval = interval;
      this.bookingService.book(booking);
    }
    if(this.bookForm.controls['alley2'].value){
      let booking = new Booking();
      booking.date = new Date().getTime();
      booking.alley = 2;
      booking.interval = interval;
      this.bookingService.book(booking);
    }
    if(this.bookForm.controls['alley3'].value){
      let booking = new Booking();
      booking.date = new Date().getTime();
      booking.alley = 3;
      booking.interval = interval;
      this.bookingService.book(booking);
    }
    if(this.bookForm.controls['alley4'].value){
      let booking = new Booking();
      booking.date = new Date().getTime();
      booking.alley = 4;
      booking.interval = interval;
      this.bookingService.book(booking);
    }

  }

  cancel() {
    this.router.navigateByUrl('home');
  }
}
