import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CustomMessage } from '../model/CustomMessage';
import { MyWebSocketService } from '../service/my-web-socket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  greeting: any;
  name: string;

  constructor(private webSocketAPI: MyWebSocketService, private router: Router) {}

  ngOnInit() {
    if (this.webSocketAPI.subscription == null) {
      this.webSocketAPI._connect();
    }
  }

  submit(bus: HTMLInputElement, generator: HTMLInputElement, load: HTMLInputElement, form: HTMLFormElement) {
    const message: CustomMessage = {
      bus: bus.value,
      generators: generator.value,
      load: load.value
    };
    this.greeting = JSON.stringify(message);
    this.webSocketAPI.resetMessages();
    this.sendMessage(message);
    this.router.navigate(['/results']);
    console.log(message);
  }

  disconnect() {
    this.webSocketAPI._disconnect();
  }

  sendMessage(message: CustomMessage) {
    this.webSocketAPI._send(message);
  }

  handleMessage(message) {
    this.greeting = message;
  }
}
