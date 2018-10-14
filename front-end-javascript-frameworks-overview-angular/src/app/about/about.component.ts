import { Component, OnInit } from '@angular/core';
import {leader} from '../shared/leader';
import {LeadersService} from '../services/leaders.service'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  leaders: leader[];

  constructor(private leaderservice: LeadersService) { }

  ngOnInit() {
    this.leaderservice.getLeaders()
    .then(leaders => this.leaders = leaders);
  }

}
