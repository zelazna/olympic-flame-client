import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  ALL_PATH_QUERY,
  SINGLE_PATH_QUERY,
  PATH_DETAILS,
  SinglePathQueryResponse,
  AllPathQueryResponse,
  PathDetailsQueryResponse
} from '../../graphql';

@Injectable()
export class PathService {

  constructor(private apollo: Apollo) { }

  getAllPaths() {
    return this.apollo.watchQuery<AllPathQueryResponse>({
      query: ALL_PATH_QUERY
    });
  }

  getPath(id: number) {
    return this.apollo.watchQuery<SinglePathQueryResponse>({
      query: SINGLE_PATH_QUERY,
      variables: {
        id
      }
    });
  }

  getPathDetails(id: number) {
    return this.apollo.watchQuery<PathDetailsQueryResponse>({
      query: PATH_DETAILS,
      variables: {
        id
      }
    });
  }
}
