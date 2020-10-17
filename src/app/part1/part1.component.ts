import { Component, OnInit, OnDestroy } from '@angular/core';
import { GettingDataService } from '../services/getting-data.service';


@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit, OnDestroy {
  missionsObj: any;
  subscription: any;
  checkAgents: string[] = [];
  countrysLst: string[] = [];
  isolatedAgentsLst: string[] = [];
  dubleMissionAgents: string[] = [];
  res = [];
  
  constructor(private data: GettingDataService) { }

  ngOnInit(): void {
  this.subscription = this.data.getMocData().subscribe(data => this.missionsObj = data);
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  getIsolatedCountry(): void {
    this.missionsObj.map(item => {
      if (!this.checkAgents.includes(item.agent)) {
        this.checkAgents.push(item.agent);
        if (!this.countrysLst.includes(item.country)) {
          this.countrysLst.push(item.country);
        }
      } else {
        this.dubleMissionAgents.push(item.agent);
      }
    });
    this.checkAgents.map(item => {
      if (!this.dubleMissionAgents.includes(item)) {
        this.isolatedAgentsLst.push(item);
      }
    });
    this.countrysLst.map(country => {
      let counter = 0
      this.missionsObj.map(mission => {
        if (mission.country === country && this.isolatedAgentsLst.includes(mission.agent)) {
          counter++
        }
      });
      this.res.push({ "country": country, "iso": counter });
      this.res.sort((a, b) => (b.iso) - (a.iso))
    })
  }
}
