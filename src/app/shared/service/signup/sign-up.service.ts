import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private auth:AngularFireAuth) { }

  signup(email: string, password:string){
    return this.auth.createUserWithEmailAndPassword(email, password);
  }
}
