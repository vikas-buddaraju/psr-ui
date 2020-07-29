import { Component, OnInit } from '@angular/core';
import { CustomMessageResponse } from '../model/CustomMessage';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  messages: CustomMessageResponse[] = this.rest.messages;
  selectedArray: CustomMessageResponse[] = [];

  constructor( private rest: ApiService) { }

  ngOnInit() {
    this.getArrayValues(0);
  }

  getArrayValues(index) {
    setInterval(() => {
      if (index == this.messages.length)
        return;
      this.selectedArray.push(this.messages[index]);
      index++;
    }, 1000);
  }

}
