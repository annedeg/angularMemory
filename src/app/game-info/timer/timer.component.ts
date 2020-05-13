import { Component, OnInit } from '@angular/core';
import { TimerServiceService } from 'src/app/timer-service.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  startTime:number;
 
  constructor(private timerService: TimerServiceService) {
    
  }

  ngOnInit() {
    this.timerService.sharedCurrentTime.subscribe(message => this.startTime = message)
    this.setCurrentTime();
    var that = this;
    setInterval(function() {
      that.setCurrentTime()
    },1);
  }

  setCurrentTime() {
    let dateTime = new Date().getTime();
    this.timerService.setTime(dateTime);
  }
}
