import {Booking} from "./booking";

export class Alley{
  id:number = 0;
  bookings: Array<Booking> = new Array<Booking>();

  constructor(id: number) {
    this.id = id;
  }
}
