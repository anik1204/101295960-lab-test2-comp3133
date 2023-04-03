import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent {
  missionList: any;
  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
  year: any;
  constructor(private api: ApiService, private router: Router) { }

  
  filterByYear(year: any) {
    if (year === 'all') {
     this.api.getLaunches().subscribe((data) => {
      this.missionList = data;
      console.log(this.missionList);
    });
    } else {
      this.api.getLaunchesByYear(year).subscribe((data) => {
        this.missionList = data;
        console.log(this.missionList);
      });
    }
  }

  handleMissionClick(mission: any) {
    this.router.navigate(['/missiondetails', mission.flight_number]);
  }
  ngOnInit(): void {
    this.api.getLaunches().subscribe((data) => {
      this.missionList = data;
      console.log(this.missionList);
    });
  }
}
