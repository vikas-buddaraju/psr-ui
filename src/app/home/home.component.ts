import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppComponent } from '../app.component';
import { CustomMessage, CustomMessageResponse } from '../model/CustomMessage';
import { MyWebSocketService } from '../service/my-web-socket.service';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Subscribable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  greeting: any;
  name: string;
  sub: Subscription;

  constructor(private webSocketAPI: MyWebSocketService, private router: Router, private rest: ApiService) {}

  ngOnInit() {
  
  }

  submit(bus: HTMLInputElement, generator: HTMLInputElement, load: HTMLInputElement, form: HTMLFormElement) {
    const message: CustomMessage = {
      bus: bus.value,
      generators: generator.value,
      load: load.value
    };
    this.greeting = JSON.stringify(message);
     this.sub=this.rest.psrdata(message).subscribe( (data: CustomMessageResponse[]) => {
       this.rest.messages = data;
       this.router.navigate(['/results']);
     }) 
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
    this.sub = null;
  }
  
  sendMessage(message: CustomMessage) {
    this.webSocketAPI._send(message);
  }

  handleMessage(message) {
    this.greeting = message;
  }
}
