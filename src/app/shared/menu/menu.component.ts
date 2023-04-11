import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../shared/service/login/login.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit,OnChanges {
  currentUser?: firebase.default.User | null;

  constructor(private router: Router, public loginService:LoginService) {

  }
  ngOnInit(): void {
    this.loginService.isLoggedIn().subscribe(user => {
      this.currentUser = user;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
    }, error => {
      console.error(error);
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  ngOnChanges() {
  }

  login() {
    this.router.navigateByUrl('login');
  }

  signup() {
    this.router.navigateByUrl('signup');
  }

  logout() {
    this.loginService.logout().then(()=>this.goHome()).catch(error => console.error(error));
  }

  goHome() {
    this.router.navigateByUrl('home')
  }

  goProfile() {
    this.router.navigateByUrl('profile')
  }
}
