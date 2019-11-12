import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { of } from 'rxjs';
import { DataService } from './shared/data.service';

describe('AppComponent', () => {

  let mockData = {"buttons":[15,21,-24,-40],"bars":[31,50],"limit":190};

   // Create a fake Data Service object with a `getData()` spy
   const dataService = jasmine.createSpyObj('DataService', ['getData']);
   // Make the spy return a synchronous Observable with the test data
   let getDataSpy = dataService.getData.and.returnValue( of(mockData) );
  let fixture:ComponentFixture<AppComponent>;
   let app:ComponentFixture<AppComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:    [
        { provide: DataService, useValue: dataService }
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  xit('should create the app', () => {
    expect(fixture).toBeTruthy();
  });
});
