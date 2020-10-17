import { Component, OnInit, OnDestroy } from '@angular/core';
import { IMission } from '../models/IMission';
import { GettingDataService } from '../services/getting-data.service';
@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit, OnDestroy {
  javaScriptRelease;
  missionsObj: any[] = [];
  subscription: any;
  constructor(
    private data: GettingDataService) { }

  ngOnInit(): void {
    this.subscription = this.data.getMocData().subscribe(data => this.missionsObj = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sortByDateA = () => { this.missionsObj.sort((a, b): any => Date.parse(a.date) - Date.parse(b.date)) }
  sortByDateD = () => { this.missionsObj.sort((a, b): any => Date.parse(b.date) - Date.parse(a.date)) }

}