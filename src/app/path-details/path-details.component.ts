import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FlamePath } from '../models';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { Apollo } from 'apollo-angular';
import { SINGLE_PATH_QUERY, SinglePathQueryResponse } from '../graphql';

@Component({
  selector: 'app-path-details',
  templateUrl: './path-details.component.html',
  styleUrls: ['./path-details.component.css']
})
export class PathDetailsComponent implements OnInit, OnDestroy {
  path: FlamePath;
  id: number;
  sub: Subscription;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private apollo: Apollo
  ) { }

  ngOnInit() {
    this.getPath();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getPath(): void {
    this.sub = this.route.params.subscribe(params => {
      this.apollo.watchQuery<SinglePathQueryResponse>({
        query: SINGLE_PATH_QUERY,
        variables: {
          id: params['id']
        }
      }).valueChanges.subscribe((response) => {
        this.path = response.data.FlamePath;
        this.loading = response.data.loading;
      });
    });
  }


}
