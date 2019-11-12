import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import { EventService } from '../shared/event.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Output('progressBarValue') progressBarChanged:EventEmitter<number> = new EventEmitter();
@Input('value') buttonValue:number;
  constructor(private eventService:EventService) { }
  ngOnInit() {
  }

  onClick(){
    console.log("button Compo "+this.buttonValue );
    this.progressBarChanged.emit(this.buttonValue);
  }

}
