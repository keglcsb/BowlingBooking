import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Location} from "@angular/common";
import {SignUpService} from "../../shared/service/signup/sign-up.service";
import {User} from "../../shared/model/user";
import {UserService} from "../../shared/service/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repassword: new FormControl('')
  })
  loading:boolean = false;

  constructor(private location:Location, private signupService: SignUpService, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(data => {
      console.log(data);
    })
  }

  signup() {
    this.loading = true;
    if(this.signupForm.controls['password'].value !== this.signupForm.controls['repassword'].value) {
      console.log("nem egyezik a két jelszó");
      this.loading = false;
      return;
    }
    if(this.userService.getByUsername(this.signupForm.controls['username'].value)){
      console.log("A felhasználónév foglalt");
      this.loading = false;
      return;
    }
    this.signupService.signup(this.signupForm.controls['email']?.value, this.signupForm.controls['password']?.value).then(cred =>{
      console.log(cred);
      const user: User = {
        id: cred.user?.uid as string,
        email: this.signupForm.controls['email'].value,
        username: this.signupForm.controls['username'].value,
      };
      this.userService.create(user).then(()=>console.log("User added")).catch(error => console.error(error));
      this.router.navigateByUrl('profile');
    }).catch(error=>console.error(error)).finally(()=>
      this.loading = false
    );
  }

  goBack() {
    this.location.back();
  }
}
