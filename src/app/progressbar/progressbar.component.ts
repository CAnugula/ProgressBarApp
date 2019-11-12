import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ProgressDataModel } from '../shared/data.model';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit{

  @Input('barNum') itemNum:number
  @Input() limit:number;
  subscribe:any;
  value:number=50;
  progressBarItem:Element;
  constructor(private eventService:EventService) { }

  ngOnInit() {
    this.eventService._buttonClickItemSource
    .subscribe((result:ProgressDataModel) => {
      console.log(result);
      if(+result.bar === this.itemNum) {
        const totalProgressVal = this.value + result.button;
        console.log("progress bar num:"+ this.itemNum);
        if(totalProgressVal > this.limit){
            this.value = this.limit;
        }
        else if(totalProgressVal < 0){
          this.value = 0;
        }
        else{
          this.value +=result.button;
        }
      }
    })
  }
}
