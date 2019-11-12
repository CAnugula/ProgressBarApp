import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ProgressbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
