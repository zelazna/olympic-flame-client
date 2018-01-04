import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Event } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PathService } from '../services/path/path.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit, OnDestroy {
  event: Event;
  id: number;
  sub: Subscription;
  constructor(private route: ActivatedRoute, private pathService: PathService) { }

  ngOnInit() {
    this.getEvent();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private getEvent(): void {
    this.sub = this.route.params.subscribe(params => {
      this.pathService.getEvent(params['id']).valueChanges.subscribe((response) => {
        this.event = response.data.event;
      });
    });
  }
}
