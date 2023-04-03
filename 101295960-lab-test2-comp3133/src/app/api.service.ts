import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLaunches() {
  return this.http.get('https://api.spacexdata.com/v3/launches');
  }

  getLaunchesByYear(year: number) {
    return this.http.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`);
  }

  getLaunchByFlightNumber(flightNumber: any) {
    return this.http.get(`https://api.spacexdata.com/v3/launches/${flightNumber}`);
  }
}
