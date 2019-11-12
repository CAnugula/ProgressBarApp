import { Injectable, EventEmitter } from '@angular/core';
import {Subject } from 'rxjs';
import { ProgressDataModel } from './data.model';

@Injectable({
    providedIn: 'root'
  })
  export class EventService {
      // Observable buttonItem source
  public _buttonClickItemSource = new Subject<ProgressDataModel>();

  }