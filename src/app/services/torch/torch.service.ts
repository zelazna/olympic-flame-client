import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { ALL_TORCHS_QUERY, AllTorchsQueryResponse } from '../../graphql';
@Injectable()
export class TorchService {

  constructor(private apollo: Apollo) { }

  getAllTorchs() {
    return this.apollo.watchQuery<AllTorchsQueryResponse>({
      query: ALL_TORCHS_QUERY
    });
  }

  getSingleTorch() { }

}
