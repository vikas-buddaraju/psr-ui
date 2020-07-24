import { Component, OnInit } from '@angular/core';
import { MyWebSocketService } from '../service/my-web-socket.service';
import { CustomMessageResponse } from '../model/CustomMessage';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  messages: CustomMessageResponse[] = [];

  constructor(private webSocketService: MyWebSocketService, private rest: ApiService) { }

  ngOnInit() {
    this.messages = this.rest.messages;
  }

}
