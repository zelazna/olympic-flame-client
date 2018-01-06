import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlamePath, Event } from '../models';
import { PathService } from '../services/path/path.service';
import { ActivatedRoute, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  path: FlamePath;
  sub: Subscription;
  isDrawerOpen = false;
  events: Event[];
  event: Event;
  currentEventID = 1;

  constructor(
    private route: ActivatedRoute,
    private pathService: PathService
  ) { }

  ngOnInit() {
    this.getPath();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  isLast() {
    return this.currentEventID >= this.events.length;
  }

  setCurrentEvent(event) {
    this.event = event;
    this.currentEventID = parseInt(event.id, 10);
  }

  nextEvent() {
    this.currentEventID = this.currentEventID + 1;
    this.event = this.findEvent();
  }

  private toggleScreen(event) {
    this.isDrawerOpen = event === 'out' ? false : true;
  }

  private getPath(): void {
    this.sub = this.route.params.subscribe(params => {
      this.pathService.getPathDetails(params['id']).valueChanges.subscribe((response) => {
        this.path = response.data.flamePath;
        this.events = this.path.events;
        this.event = this.findEvent();
      });
    });
  }

  private findEvent(): Event {
    return this.events.find(e => parseInt(e.id, 10) === this.currentEventID);
  }
}
