import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TimerServiceService {

  private currentTime = new BehaviorSubject(0);
  sharedCurrentTime = this.currentTime.asObservable();
  
  constructor() { }

  setTime(time: number) {
    this.currentTime.next(time);
  }
}
