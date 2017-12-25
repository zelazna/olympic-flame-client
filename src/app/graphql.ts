import {FlamePath} from './models';
import gql from 'graphql-tag';

export const ALL_PATH_QUERY = gql`
  query{
    allFlamePath {
      id
      name
      description
      points{
        id
        lat
        long
      }
    }
  }
`;

export interface AllPathQueryResponse {
  allFlamePath: FlamePath[];
  loading: boolean;
}
