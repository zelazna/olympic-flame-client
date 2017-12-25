import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { FlamePath } from '../models';
import { ALL_PATH_QUERY, AllPathQueryResponse } from '../graphql';

@Component({
  selector: 'app-flame-paths-list',
  templateUrl: './flame-paths-list.component.html',
  styleUrls: ['./flame-paths-list.component.css']
})
export class FlamePathsListComponent implements OnInit {
  allPaths: FlamePath[] = [];
  loading = true;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<AllPathQueryResponse>({
      query: ALL_PATH_QUERY
    }).valueChanges.subscribe((response) => {
      this.allPaths = response.data.allFlamePath;
      this.loading = response.data.loading;
    });
  }
}
