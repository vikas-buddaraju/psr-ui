import { Component, OnInit } from '@angular/core';
import { MyWebSocketService } from '../service/my-web-socket.service';
import { CustomMessageResponse } from '../model/CustomMessage';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  messages: CustomMessageResponse[] = [];

  constructor(private webSocketService: MyWebSocketService) { }

  ngOnInit() {
    this.messages = this.webSocketService.messages;
  }

}
