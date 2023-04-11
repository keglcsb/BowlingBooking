import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = "Users";

  constructor(private afs: AngularFirestore) { }

  create(user:User) {
    return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }

  getByUsername(username:string) {
    return this.afs.collection<User>(this.collectionName, ref => ref.where("username", "==", username ).limit(1)).valueChanges();
  }

  getById(id:string){
    return this.afs.collection<User>(this.collectionName).doc(id).valueChanges();
  }

  update(){

  }

  delete(){

  }
}

