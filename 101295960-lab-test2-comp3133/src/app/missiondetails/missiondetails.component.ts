import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent {
  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute) { }
  
  launch: any;
  flightNumber = this.route.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.api.getLaunchByFlightNumber(this.flightNumber).subscribe((data) => {
      this.launch = data;
      console.log(this.launch);
    });
  }
}
