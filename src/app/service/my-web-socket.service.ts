import { Injectable } from "@angular/core";
import { HomeComponent } from "../home/home.component";
import * as Stomp from "stompjs";
import * as SockJS from "sockjs-client";
import { Subscription } from 'rxjs';
import { CustomMessageResponse } from '../model/CustomMessage';

@Injectable({
  providedIn: "root",
})
export class MyWebSocketService {
  webSocketEndPoint: string = "http://localhost:8080/ws";
  topic: string = "/topic/greetings";
  stompClient: Stomp;
  messages: CustomMessageResponse[] = [];
  subscription: Subscription = null;

  constructor() {}

  _connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    return _this.stompClient.connect(
      {},
      (frame) => {
        this.subscription = _this.stompClient.subscribe(_this.topic, (sdkEvent) => {
          _this.onMessageReceived(sdkEvent);
        });
      },
      this.errorCallBack
    );
  }

  _disconnect() {
    if (this.stompClient !== null) {
      this.stompClient.disconnect();
    }
    if(this.subscription != null){
      this.subscription.unsubscribe;
      this.subscription = null;
    }
    console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error) {
    console.log("errorCallBack -> " + error);
    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  /**
   * Send message to sever via web socket
   * @param {*} message
   */
  _send(message) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/hello", {}, JSON.stringify(message));
  }

  onMessageReceived(message) {
    this.messages.push(JSON.parse(message.body));
    console.log("Message Recieved from Server :: " + message);
  }

  resetMessages(){
    this.messages = [];
  }
}
