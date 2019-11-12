import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { DataModel } from './data.model';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;
  const mockDataObj:DataModel = {"buttons":[15,21,-24,-40],"bars":[31,50],"limit":190};
  let httpClientSpy:{get: jasmine.Spy};
  beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient',['get']);
  service = new DataService(<any>httpClientSpy);
  httpClientSpy.get.and.returnValue(of(mockDataObj));
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getData should return value from observable',()=>{
    service.getData().subscribe(
      val => expect(val).toEqual(mockDataObj, {"buttons":[15,21,-24,-40],"bars":[31,50],"limit":190}),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
