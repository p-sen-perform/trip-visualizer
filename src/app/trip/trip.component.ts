import { Component, OnInit } from '@angular/core';
interface Trip {
  start: string;
  end: string;
  level: number;
}
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.scss']
})
export class TripComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 startPoint: string = '';
  endPoint: string = '';
  trips: Trip[] = [];

  addTrip() {
    const start = this.startPoint.trim().toUpperCase().slice(0, 3);
    const end = this.endPoint.trim().toUpperCase().slice(0, 3);
    if (!start || !end) {
      alert('Please fill both the Start Point and End Point.');
      return;
    }
  
    let level = 1;
    const lastTrip = this.trips[this.trips.length - 1];
  
    const isDuplicate = this.trips.some(t => t.start === start && t.end === end);
  
    if (isDuplicate) {
      level = 2;
    } else if (lastTrip && lastTrip.end !== start) {
      level = 1;
    }
  
    this.trips.push({ start, end, level });
    this.startPoint = '';
    this.endPoint = '';
  }
 
 
}
