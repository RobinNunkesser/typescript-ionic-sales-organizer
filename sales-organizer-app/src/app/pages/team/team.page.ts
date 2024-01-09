import { Component, OnInit } from '@angular/core';
import { DataService, TeamMember } from './../../services/data.service';
import { sortBy } from 'lodash';

@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  teammembers : TeamMember[] = [];

  constructor(private dataService: DataService) {
    this.dataService.getTeamMembers().subscribe(data => {this.teammembers = sortBy(data,'name')})
   }

  ngOnInit() {
  }

}
