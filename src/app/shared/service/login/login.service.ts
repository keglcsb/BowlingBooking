import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../../model/user";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private auth:AngularFireAuth) {

  }

  loginUser(email:string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  logout(){
    return this.auth.signOut();
  }

  isLoggedIn(){
    console.log(this.auth.user)
    return this.auth.user;
  }

}
