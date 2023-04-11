import {Component, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../shared/service/login/login.service";
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/service/user/user.service";
import {BookingService} from "../../shared/service/booking/booking.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnChanges {
  currentUser?: User;
  minutes: number = 0;

  constructor(private router: Router, private userService:UserService, private bookService:BookingService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem("user") as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data =>{
      this.currentUser = data;
      this.currentUser?.bookings?.pop();
      if(this.currentUser)
        this.bookService.getByUser(this.currentUser).subscribe(bookings => {
          for(let booking of bookings){
            this.currentUser?.bookings?.push(booking);
          }
          console.log(this.currentUser);
        })
    });

  }

  ngOnChanges() {

  }

  goBook() {
    this.router.navigateByUrl('profile/book');
  }
}
