import { Injectable } from '@angular/core';
import {Booking} from "../../model/booking";
import {Observable, Subscriber} from "rxjs";
import {User} from "../../model/user";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  collectionName = "Booking";

  constructor(private afs:AngularFirestore) {
  }

  book(booking:Booking) {
    return this.afs.collection<Booking>(this.collectionName).doc(booking.id).set(booking);
  }

  getAll(){
    return this.afs.collection<Booking>(this.collectionName).valueChanges();
  }

  getByUser(user:User){
    return this.afs.collection<Booking>(this.collectionName, ref => ref.where('booker', '==', user.username)).valueChanges();
  }

  getById(id:string){
    return this.afs.collection<Booking>(this.collectionName).doc().valueChanges();
  }

}
