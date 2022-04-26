import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventTriggerName, TriggerEventType } from '../build';



@Component({
  selector: 'app-pge-break',
  templateUrl: './pge-break.component.html',
  styleUrls: ['./pge-break.component.scss']
})
export class PgeBreakComponent implements OnInit {
  @Input() model: any;
  @Output() triggerEvent: EventEmitter<TriggerEventType> = new EventEmitter<TriggerEventType>()

  constructor() { }

  ngOnInit(): void {
  }

  trigger(eventName: EventTriggerName, bindedData: { [key: string]: any }): void {
    this.triggerEvent.emit({ eventName, bindedData })
  }

}
