import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FlamePath } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PathService } from '../services/path/path.service';

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.scss']
})
export class PathDetailsComponent implements OnInit, OnDestroy {
  path: FlamePath;
  id: number;
  sub: Subscription;
  loading = true;

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

  private getPath(): void {
    this.sub = this.route.params.subscribe(params => {
      this.pathService.getPath(params['id']).valueChanges.subscribe((response) => {
        this.path = response.data.flamePath;
        this.loading = response.data.loading;
      });
    });
  }
}
