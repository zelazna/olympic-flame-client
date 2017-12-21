import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(apollo: Apollo) {
    apollo.query({query: gql`{
      allFlamePath {
        id
        name
        description
        torch {
          name
          description
        }
        points{
          id
          lat
          long
        }
      }
    }`}).subscribe(console.log);
  }
}
