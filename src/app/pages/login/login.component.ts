import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../../shared/service/login/login.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', []),
    password: new FormControl('')
  })

  loading: boolean = false;

  constructor(private loginService: LoginService, private location: Location, private router: Router) { }

  ngOnInit(): void {
  }


  login() {
    this.loading = true;
    this.loginService.loginUser(this.loginForm.controls['email']?.value, this.loginForm.controls['password']?.value).then(cred =>{
      console.log(cred);
      this.router.navigateByUrl('profile');
      this.loading = false;
    }).catch(error => {
      this.loading = false;
    });
  }

  goBack(){
    this.location.back();
  }
}
