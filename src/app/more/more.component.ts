import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlamePath } from '../models';
import { PathService } from '../services/path/path.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit, OnDestroy {
  path: FlamePath;
  sub: Subscription;
  isDrawerOpen: boolean = false;

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

  private toggleScreen(event) {
    this.isDrawerOpen = event === 'out' ? false : true;
  }

  private getPath(): void {
    this.sub = this.route.params.subscribe(params => {
      this.pathService.getPathDetails(params['id']).valueChanges.subscribe((response) => {
        this.path = response.data.FlamePath;
      });
    });
  }
}
