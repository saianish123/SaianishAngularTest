import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  booking = [{
    "roomNumber": "1",
    "price": "1200.00"
  }, {
    "roomNumber": "2",
    "price": "2000.00"
  }];

  constructor() { }
  
  getAllRoomsForBooking() {
    return this.booking;
  }
}
