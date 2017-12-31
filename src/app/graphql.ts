import { FlamePath } from './models';
import gql from 'graphql-tag';

export const ALL_PATH_QUERY = gql`
  query{
    allFlamePath {
      id
      name
    }
  }
`;

export interface AllPathQueryResponse {
  allFlamePath: FlamePath[];
  loading: boolean;
}

export const SINGLE_PATH_QUERY = gql`
  query($id: ID!){
    FlamePath(id: $id) {
      id
      name
      description
    }
  }
`;

export interface SinglePathQueryResponse {
  FlamePath: FlamePath;
  loading: boolean;
}

export const PATH_DETAILS = gql`
query($id: ID!){
  FlamePath(id: $id) {
    id
    name
    description
    torch {
			id
    }
		points{
			lat
			long
		}
  }
}
`;

export interface PathDetailsQueryResponse {
  FlamePath: FlamePath;
}
