import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {BookingService} from "../../../shared/service/booking/booking.service";
import {Booking} from "../../../shared/model/booking";
import {Subscriber} from "rxjs";
import {Alley} from "../../../shared/model/alley";
import {DateformatPipe} from "../../../shared/pipe/dateformat.pipe";

@Component({
  selector: 'app-alley',
  templateUrl: './alley.component.html',
  styleUrls: ['./alley.component.scss']
})
export class AlleyComponent implements OnInit{
  alley1: Alley = new Alley(1);
  alley2: Alley = new Alley(2);
  alley3: Alley = new Alley(3);
  alley4: Alley = new Alley(4);
  minutes?: string;

  loading: boolean = false;


  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.loading = true;
    this.bookingService.getAll().subscribe((data: Array<Booking>) =>{
      for(let booking of data){
        if(booking.interval.start.minutes < 10) {this.minutes = booking.interval.start.minutes + '0'}
        else {this.minutes = booking.interval.start.minutes as unknown as string}
        switch (booking.alley){
          case 1: this.alley1.bookings.push(booking);break;
          case 2: this.alley2.bookings.push(booking);break;
          case 3: this.alley3.bookings.push(booking);break;
          case 4: this.alley4.bookings.push(booking);break;
        }
        this.loading = false;
      }
    }, error => {console.error(error);this.loading = false});
  }

}
