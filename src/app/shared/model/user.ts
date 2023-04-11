import {Booking} from "./booking";

export class User{
  id:string = "";
  username: string = "";
  email: string = "";
  bookings?: Array<Booking> = new Array<Booking>();
}
