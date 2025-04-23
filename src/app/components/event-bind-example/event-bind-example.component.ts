import { Component } from '@angular/core';

@Component({
  selector: 'app-event-bind-example',
  imports: [],
  templateUrl: './event-bind-example.component.html',
  styleUrl: './event-bind-example.component.css'
})
export class EventBindExampleComponent {
  times: number = 0;
  userInput: string = '';

  incrementTimes(){
    this.times++;
  }

  decrementTimes(){
    this.times--;
  }

  reset() {
    this.times = 0;
  }

}
