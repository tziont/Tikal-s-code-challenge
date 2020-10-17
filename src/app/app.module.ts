import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GettingDataService } from '../app/services/getting-data.service'
import { AppComponent } from './app.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';

@NgModule({
  declarations: [
    AppComponent,
    Part1Component,
    Part2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GettingDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
