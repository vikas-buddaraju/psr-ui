import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component'
import { MyWebSocketService } from './service/my-web-socket.service';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    MyWebSocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
