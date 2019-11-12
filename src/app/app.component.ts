import { Component, OnInit, OnDestroy, Output, Input } from '@angular/core';
import { DataService } from './shared/data.service';
import { DataModel, ProgressDataModel } from './shared/data.model';
import { EventEmitter } from 'events';
import { EventService } from './shared/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data:DataModel = {
    bars: [],
    buttons:[],
    limit:0
  };

  selectedBarNumber:number;
  progressBar:HTMLSelectElement;
  constructor(private dataService:DataService, private eventService:EventService){

  }
  ngOnInit(){
    this.dataService.getData().subscribe(response => 
      {
        console.log(response);
        this.data = response;
        this.selectedBarNumber = this.data.bars[0];
      });
  }


  onButtonClick(value:number){
   this.eventService._buttonClickItemSource.next(<ProgressDataModel>{
     bar:this.selectedBarNumber,
     button:value
   });
   }
}
