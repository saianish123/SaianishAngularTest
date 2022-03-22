import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/model/Booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  allRoomsForBooking=[];
  booking: any;

  constructor(private services:Booking) {
    this.allRoomsForBooking=this.booking.getAllRoomsForBooking();
   }

  ngOnInit() {
  }

}
