import { FlamePath, Event, Torch } from './models';
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
    flamePath(id: $id) {
      id
      name
      description
    }
  }
`;

export interface SinglePathQueryResponse {
  flamePath: FlamePath;
  loading: boolean;
}

export const PATH_DETAILS = gql`
query($id: ID!){
  flamePath(id: $id) {
    id
    name
    description
    torch {
			id
    }
    events{
      id
      description
		  title
		  location
    }
  }
}
`;

export interface PathDetailsQueryResponse {
  flamePath: FlamePath;
}

export const ALL_TORCHS_QUERY = gql`
query{
  torchs {
    id
    name
    description
    image_url
  }
}
`;

export interface AllTorchsQueryResponse {
  torchs: Torch[];
}
