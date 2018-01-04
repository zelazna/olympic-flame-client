import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlamePath, Event } from '../models';
import { PathService } from '../services/path/path.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
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
  currentEventID = 0;

  constructor(
    private route: ActivatedRoute,
    private pathService: PathService,
    private router: Router
  ) {
    router.events.subscribe(routerEvent => {
      if (routerEvent instanceof NavigationEnd) {
        const eventID = routerEvent.url.split('/').slice(-1)[0];
        this.currentEventID = parseInt(eventID, 10);
      }
    });
  }

  ngOnInit() {
    this.getPath();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  nextEvent() {
    this.currentEventID = this.currentEventID + 1;
    this.router.navigate([`path/${this.path.id}/event/${this.currentEventID}`]);
  }

  isLast() {
    return this.currentEventID >= this.events.length;
  }

  private toggleScreen(event) {
    this.isDrawerOpen = event === 'out' ? false : true;
  }

  private getPath(): void {
    this.sub = this.route.params.subscribe(params => {
      this.pathService.getPathDetails(params['id']).valueChanges.subscribe((response) => {
        this.path = response.data.flamePath;
        this.events = this.path.events;
        this.currentEventID = parseInt(this.events[0].id, 10);
      });
    });
  }
}
