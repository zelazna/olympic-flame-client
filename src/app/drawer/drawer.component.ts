import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Event } from '../models';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class DrawerComponent implements OnInit {
  menuState = 'out';
  @Output()
  drawerState: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  selectedEvent: EventEmitter<Event> = new EventEmitter<Event>();
  @Input()
  events: Event[];
  @Input()
  currentEvent: Event;
  constructor() { }

  ngOnInit() {
  }

  toggleDrawer() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.drawerState.emit(this.menuState);
  }

  setCurrentEvent(event) {
    this.selectedEvent.emit(event);
  }
}
